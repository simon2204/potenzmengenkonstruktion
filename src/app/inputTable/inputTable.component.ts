import {ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'; // Removed ViewChild
import {CommonModule} from '@angular/common';
import {StateBlockComponent} from "./state-block/state-block.component";
import {EndlicherState} from "../endlicherautomat/EndlicherState";
import {StatemachineService} from "../../../statemachine/src/lib/statemachine/statemachine.service";
import {EndlicheTransition} from "../endlicherautomat/EndlicheTransition";
import {Point} from "../../../statemachine/src/lib/statemachine/drawingprimitives/Point";
import {
  DfaGeneratorService,
  SolutionTableRow,
  MarkerItem
} from '../services/dfa-generator-service.service'; // Import from service
import {EndlicherAutomat} from "../endlicherautomat/EndlicherAutomat";
import {Subscription} from 'rxjs';
import {StateStatus} from "./stateStatus";

// ----------- Interfaces -----------
// ... (DisplayState, DisplayMarker, TableRow interfaces remain the same) ...
interface DisplayState {
  state: EndlicherState;
  status: StateStatus;
}

interface DisplayMarker {
  id: string;
  label: string;
  status: StateStatus;
}

interface TableRow {
  id: number;
  rowStatus: 'original' | 'correct' | 'incorrect' | 'missing' | 'partial';
  displayStates: DisplayState[];
  displayMarkers: DisplayMarker[];
  displayTransitions: { [symbol: string]: DisplayState[] };
  solutionStateKey?: string;
}
// ----------- Ende Interfaces -----------

@Component({
  selector: 'app-inputTable',
  templateUrl: './inputTable.component.html',
  styleUrls: ['./inputTable.component.scss'],
  standalone: true,
  imports: [CommonModule, StateBlockComponent]
})
export class InputTableComponent implements OnInit, OnDestroy {

  private readonly emptyState: EndlicherState;
  private serviceSubscription: Subscription | null = null;
  private originalTableDataBeforeCheck: TableRow[] | null = null;

  markers: MarkerItem[] = [
    { id: '(A)', label: 'A' },
    { id: '(E)', label: 'E' }
  ];

  tableData: TableRow[] = [];
  activeCell: number | null = null;
  activeCellType: string | null = null;
  isCheckMode: boolean = false;

  constructor(
      public service: StatemachineService,
      private cdRef: ChangeDetectorRef,
      private dfaGeneratorService: DfaGeneratorService // Inject the new service
  ) {
    const state = new EndlicherState(Point.zero, -1);
    state.name = "∅";
    this.emptyState = state;
  }

  ngOnInit(): void {
    this.initializeEmptyTable();
  }

  ngOnDestroy(): void {
    this.serviceSubscription?.unsubscribe();
  }

  get stateMachine(): EndlicherAutomat {
    return this.service.stateMachine as EndlicherAutomat;
  }

  get availableStates(): EndlicherState[] {
    const states = (this.service.states || []) as EndlicherState[];
    const realStates = states.filter(s => s.id !== this.emptyState.id);
    return [this.emptyState, ...realStates];
  }

  get symbols(): string[] {
    // Primarily use the DfaGeneratorService for consistent alphabet
    if (this.stateMachine) {
      return this.dfaGeneratorService.getAlphabet(this.stateMachine);
    }
    // Fallback if stateMachine is not yet available
    const uniqueSymbols = new Set<string>();
    if (this.service.transitions) {
      for (const transition of this.service.transitions) {
        for (const symbol of (transition as EndlicheTransition).transitionSymbols) {
          if (symbol !== EndlicherAutomat.epsilon) {
            uniqueSymbols.add(symbol);
          }
        }
      }
    }
    return Array.from(uniqueSymbols).sort();
  }

  initializeEmptyTable(): void {
    this.tableData = [{
      id: 1,
      rowStatus: 'original',
      displayStates: [],
      displayMarkers: [],
      displayTransitions: this.getDefaultDisplayTransitions(),
    }];
    this.isCheckMode = false;
    this.activeCell = null;
    this.activeCellType = null;
    this.originalTableDataBeforeCheck = null;
  }

  async checkTable(): Promise<void> {
    if (this.isCheckMode) { return; }
    if (!this.stateMachine) { alert("Kein Automat vorhanden, um Lösung zu generieren."); return; }

    console.log("Starte Generierung der Lösung für Vergleich...");
    let solutionData: SolutionTableRow[];
    try {
      // Generate solution data using the service
      solutionData = this.dfaGeneratorService.generateSolutionTable(this.stateMachine);
      console.log("Lösung generiert:", solutionData);
    } catch (error: any) {
      alert(`Lösung konnte nicht generiert werden: ${error.message}`);
      console.error("Fehler beim Generieren der Lösung:", error);
      return;
    }

    if (!solutionData) { alert("Lösung konnte nicht generiert werden (unerwarteter Zustand)."); return; }

    this.originalTableDataBeforeCheck = JSON.parse(JSON.stringify(this.tableData));
    this.performComparisonBasedOnSolutionOrder(solutionData);

    this.isCheckMode = true;
    this.activeCell = null;
    this.activeCellType = null;
    this.cdRef.detectChanges();
  }

  exitCheckMode(): void {
    if (this.originalTableDataBeforeCheck) {
      this.tableData = JSON.parse(JSON.stringify(this.originalTableDataBeforeCheck));
      this.originalTableDataBeforeCheck = null;
      this.isCheckMode = false;
      this.activeCell = null;
      this.activeCellType = null;
      this.adjustEmptyRows();
      this.cdRef.detectChanges();
      console.log("Check-Modus beendet, vorheriger Zustand wiederhergestellt.");
    } else {
      console.warn("Keine vorherigen Daten zum Wiederherstellen gefunden. Initialisiere Tabelle neu.");
      this.initializeEmptyTable();
    }
  }

  private performComparisonBasedOnSolutionOrder(solutionData: SolutionTableRow[]): void {
    const comparisonResult: TableRow[] = [];
    const processedOriginalInputRowIds = new Set<number>();

    const originalInputMap = new Map<string, TableRow>();
    (this.originalTableDataBeforeCheck || []).forEach(inputRow => {
      const key = this.getStateSetKeyFromDisplay(inputRow.displayStates);
      if (!originalInputMap.has(key)) {
        originalInputMap.set(key, inputRow);
      } else {
        console.warn(`performComparison: Duplicate input key '${key}' found. Using first occurrence.`);
      }
    });

    solutionData.forEach((solutionRow) => {
      // Use service's getStateSetKey
      const solutionKey = this.dfaGeneratorService.getStateSetKey(solutionRow.states);
      const matchingOriginalInputRow = originalInputMap.get(solutionKey);
      let resultRow: TableRow;

      if (matchingOriginalInputRow) {
        resultRow = {
          id: matchingOriginalInputRow.id,
          rowStatus: 'correct',
          displayStates: [],
          displayMarkers: [],
          displayTransitions: {},
          solutionStateKey: solutionKey // Key from service
        };

        const { states, markers } = this.compareStatesAndMarkers(
            matchingOriginalInputRow.displayStates.map(ds => ds.state),
            matchingOriginalInputRow.displayMarkers.map(dm => dm.id),
            solutionRow.states,
            solutionRow.markers
        );
        resultRow.displayStates = states;
        resultRow.displayMarkers = markers;

        if (states.some(s => s.status !== StateStatus.correct) || markers.some(m => m.status !== StateStatus.correct)) {
          resultRow.rowStatus = 'partial';
        }

        resultRow.displayTransitions = this.compareTransitions(
            matchingOriginalInputRow.displayTransitions,
            solutionRow.transitions
        );

        if (Object.values(resultRow.displayTransitions).flat().some(s => s.status !== StateStatus.correct)) {
          resultRow.rowStatus = 'partial';
        }
        processedOriginalInputRowIds.add(matchingOriginalInputRow.id);

      } else {
        resultRow = {
          id: this.getNextRowId(comparisonResult),
          rowStatus: 'missing',
          displayStates: solutionRow.states.map(state => ({ state, status: StateStatus.missing })),
          displayMarkers: this.markers
              .filter(m => solutionRow.markers.includes(m.id))
              .map(m => ({ id: m.id, label: m.label, status: StateStatus.missing })),
          displayTransitions: {},
          solutionStateKey: solutionKey // Key from service
        };
        this.symbols.forEach(symbol => {
          resultRow.displayTransitions[symbol] = (solutionRow.transitions[symbol] || [])
              .map(state => ({ state, status: StateStatus.missing }));
        });
      }
      comparisonResult.push(resultRow);
    });

    (this.originalTableDataBeforeCheck || []).forEach(originalInputRow => {
      if (!processedOriginalInputRowIds.has(originalInputRow.id)) {
        const incorrectKey = this.getStateSetKeyFromDisplay(originalInputRow.displayStates);
        console.log(`performComparison: Adding incorrect user row (ID: ${originalInputRow.id}, Key: ${incorrectKey})`);
        const incorrectRow: TableRow = {
          id: originalInputRow.id,
          rowStatus: 'incorrect',
          displayStates: originalInputRow.displayStates.map(ds => ({ ...ds, status: StateStatus.incorrect })),
          displayMarkers: originalInputRow.displayMarkers.map(dm => ({ ...dm, status: StateStatus.incorrect })),
          displayTransitions: {},
          solutionStateKey: incorrectKey
        };
        this.symbols.forEach(symbol => {
          incorrectRow.displayTransitions[symbol] = (originalInputRow.displayTransitions[symbol] || [])
              .map(ds => ({ state: ds.state, status: StateStatus.incorrect }));
        });
        comparisonResult.push(incorrectRow);
      }
    });
    this.tableData = comparisonResult;
  }


  private compareStatesAndMarkers(
      inputStates: EndlicherState[],
      inputMarkerIds: string[],
      solutionStates: EndlicherState[],
      solutionMarkerIds: string[]
  ): { states: DisplayState[], markers: DisplayMarker[] } {
    const resultStates: DisplayState[] = [];
    const solutionStateMap = new Map(solutionStates.map(s => [s.id, s]));
    const inputStateIdSet = new Set(inputStates.map(s => s.id));

    solutionStates.forEach(solutionState => {
      if (inputStateIdSet.has(solutionState.id)) {
        resultStates.push({ state: solutionState, status: StateStatus.correct });
      } else {
        resultStates.push({ state: solutionState, status: StateStatus.missing });
      }
    });

    inputStates.forEach(inputState => {
      if (!solutionStateMap.has(inputState.id)) {
        resultStates.push({ state: inputState, status: StateStatus.incorrect });
      }
    });

    const resultMarkers: DisplayMarker[] = [];
    const solutionMarkerSet = new Set(solutionMarkerIds);
    const inputMarkerSet = new Set(inputMarkerIds);

    solutionMarkerIds.forEach(solutionMarkerId => {
      const markerDef = this.markers.find(m => m.id === solutionMarkerId);
      if (!markerDef) return;
      if (inputMarkerSet.has(solutionMarkerId)) {
        resultMarkers.push({ ...markerDef, status: StateStatus.correct });
      } else {
        resultMarkers.push({ ...markerDef, status: StateStatus.missing });
      }
    });

    inputMarkerIds.forEach(inputMarkerId => {
      const markerDef = this.markers.find(m => m.id === inputMarkerId);
      if (!markerDef) return;
      if (!solutionMarkerSet.has(inputMarkerId)) {
        resultMarkers.push({ ...markerDef, status: StateStatus.incorrect });
      }
    });

    resultStates.sort((a, b) => (a.state.id ?? -1) - (b.state.id ?? -1));
    resultMarkers.sort((a, b) => a.label.localeCompare(b.label));

    return { states: resultStates, markers: resultMarkers };
  }

  private compareTransitions(
      inputTransitions: { [symbol: string]: DisplayState[] },
      solutionTransitions: { [symbol: string]: EndlicherState[] }
  ): { [symbol: string]: DisplayState[] } {
    const result: { [symbol: string]: DisplayState[] } = {};
    const allSymbols = new Set([...this.symbols, ...Object.keys(solutionTransitions)]);

    allSymbols.forEach(symbol => {
      const inputDisplayStates = inputTransitions[symbol] || [];
      const inputStates = inputDisplayStates.map(ds => ds.state);
      const solutionStatesForSymbol = solutionTransitions[symbol] || [];

      const { states: comparedStates } = this.compareStatesAndMarkers(
          inputStates, [],
          solutionStatesForSymbol, []
      );
      result[symbol] = comparedStates;
    });
    return result;
  }

  /** Erzeugt einen Key aus einer Liste von DisplayState-Objekten unter Verwendung des Service. */
  private getStateSetKeyFromDisplay(displayStates: DisplayState[]): string {
    if (!displayStates) return '∅';
    // Pass this.emptyState if the service's getStateSetKey relies on it contextually,
    // but the service already has its own emptyState. So just pass the states.
    return this.dfaGeneratorService.getStateSetKey(displayStates.map(ds => ds.state));
  }

  private getNextRowId(currentData: TableRow[]): number {
    if (!currentData || currentData.length === 0) return 1;
    return currentData.reduce((max, row) => Math.max(max, row.id), 0) + 1;
  }

  private getDefaultDisplayTransitions(): { [symbol: string]: DisplayState[] } {
    return Object.fromEntries(this.symbols.map(symbol => [symbol, []]));
  }

  selectCell(rowId: number, type: string): void {
    if (this.isCheckMode) return;
    this.activeCell = rowId;
    this.activeCellType = type;
  }

  addStateToCell(state: EndlicherState): void {
    if (this.isCheckMode || !this.activeCell || !this.activeCellType) return;

    const rowIndex = this.tableData.findIndex(row => row.id === this.activeCell);
    if (rowIndex === -1) return;
    const row = this.tableData[rowIndex];
    const isLastRow = rowIndex === this.tableData.length - 1;

    if (this.activeCellType === 'state') {
      const existingIndex = row.displayStates.findIndex(ds => ds.state.id === state.id);
      if (existingIndex === -1) {
        row.displayStates.push({ state: state, status: StateStatus.original });
        row.displayStates.sort((a, b) => (a.state.id ?? -1) - (b.state.id ?? -1));
      } else {
        row.displayStates.splice(existingIndex, 1);
      }
    } else {
      const symbol = this.activeCellType as string;
      if (!row.displayTransitions[symbol]) row.displayTransitions[symbol] = [];
      const transitionStates = row.displayTransitions[symbol];
      const existingIndex = transitionStates.findIndex(ds => ds.state.id === state.id);
      if (existingIndex === -1) {
        transitionStates.push({ state: state, status: StateStatus.original });
        transitionStates.sort((a, b) => (a.state.id ?? -1) - (b.state.id ?? -1));
        if (isLastRow) {
          this.checkAndAddEmptyRowIfNeeded();
        }
      } else {
        transitionStates.splice(existingIndex, 1);
        this.checkAndAddEmptyRowIfNeeded();
      }
    }
    this.cdRef.detectChanges();
  }

  removeStateFromCell(rowId: number, displayStateToRemove: DisplayState): void {
    if (this.isCheckMode) return;
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    this.tableData[rowIndex].displayStates = this.tableData[rowIndex].displayStates.filter(
        ds => ds.state.id !== displayStateToRemove.state.id
    );
    this.adjustEmptyRows();
  }

  removeMarkerFromCell(rowId: number, displayMarkerToRemove: DisplayMarker): void {
    if (this.isCheckMode) return;
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    this.tableData[rowIndex].displayMarkers = this.tableData[rowIndex].displayMarkers.filter(
        ds => ds.id !== displayMarkerToRemove.id
    );
    this.adjustEmptyRows();
  }

  removeTransitionState(rowId: number, symbol: string, displayStateToRemove: DisplayState): void {
    if (this.isCheckMode) return;
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    if (this.tableData[rowIndex].displayTransitions[symbol]) {
      this.tableData[rowIndex].displayTransitions[symbol] =
          this.tableData[rowIndex].displayTransitions[symbol].filter(
              ds => ds.state.id !== displayStateToRemove.state.id
          );
      this.adjustEmptyRows();
    }
  }

  toggleMarker(rowId: number, markerId: string): void {
    if (this.isCheckMode || this.activeCellType !== 'state' || this.activeCell !== rowId) return;

    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;
    const row = this.tableData[rowIndex];
    const markerDef = this.markers.find(m => m.id === markerId);
    if (!markerDef) return;

    const existingIndex = row.displayMarkers.findIndex(dm => dm.id === markerId);
    if (existingIndex > -1) {
      row.displayMarkers.splice(existingIndex, 1);
    } else {
      row.displayMarkers.push({ ...markerDef, status: StateStatus.original });
      row.displayMarkers.sort((a, b) => a.label.localeCompare(b.label));
    }
    this.adjustEmptyRows();
  }

  private checkAndAddEmptyRowIfNeeded(): void {
    if (this.isCheckMode || this.tableData.length === 0) return;

    const lastRow = this.tableData[this.tableData.length - 1];
    const currentSymbols = this.symbols;

    if (currentSymbols.length === 0 && lastRow.displayStates.length === 0 && lastRow.displayMarkers.length === 0) {
      return;
    }
    if (currentSymbols.length === 0 && (lastRow.displayStates.length > 0 || lastRow.displayMarkers.length > 0)) {
      // Continue to add row
    } else {
      let isLastRowFull = true;
      for (const symbol of currentSymbols) {
        if (!lastRow.displayTransitions[symbol] || lastRow.displayTransitions[symbol].length === 0) {
          isLastRowFull = false;
          break;
        }
      }
      if (!isLastRowFull) return;
    }

    console.log("Letzte Zeile gilt als voll, füge neue leere Zeile hinzu.");
    this.tableData.push({
      id: this.getNextRowId(this.tableData),
      rowStatus: 'original',
      displayStates: [],
      displayMarkers: [],
      displayTransitions: this.getDefaultDisplayTransitions(),
    });
    this.cdRef.detectChanges();
  }

  private adjustEmptyRows(): void {
    if (this.isCheckMode) return;

    const rowsToKeep = this.tableData.filter((row, index) => {
      const isEmpty = row.displayStates.length === 0 && row.displayMarkers.length === 0;
      return !isEmpty || index === 0;
    });

    if (rowsToKeep.length !== this.tableData.length) {
      console.log(`Entferne ${this.tableData.length - rowsToKeep.length} leere Zeile(n).`);
      this.tableData = rowsToKeep;
      this.cdRef.detectChanges();
    }

    if (this.tableData.length === 0) {
      console.warn("Nach adjustEmptyRows war tableData leer. Initialisiere neu.");
      this.initializeEmptyTable();
    }
  }

  resetTable(): void {
    if (this.isCheckMode) {
      this.exitCheckMode();
    } else {
      this.initializeEmptyTable();
    }
  }

  handleKeyDown(event: KeyboardEvent, rowId: number, type: string): void {
    if (this.isCheckMode) return;

    if (this.activeCell !== rowId || this.activeCellType !== type) {
      this.selectCell(rowId, type);
    }

    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    const currentSymbols = this.symbols;
    let colIndex = type === 'state' ? 0 : currentSymbols.indexOf(type) + 1;

    if (rowIndex === -1 || colIndex < 0) return;

    let newRowIndex = rowIndex;
    let newColIndex = colIndex;
    let moved = false;

    switch (event.key) {
      case 'ArrowUp':   newRowIndex = Math.max(0, rowIndex - 1); moved = true; break;
      case 'ArrowDown': newRowIndex = Math.min(this.tableData.length - 1, rowIndex + 1); moved = true; break;
      case 'ArrowLeft': newColIndex = Math.max(0, colIndex - 1); moved = true; break;
      case 'ArrowRight':newColIndex = Math.min(currentSymbols.length, colIndex + 1); moved = true; break;
    }

    if (moved) {
      event.preventDefault();
      const newRow = this.tableData[newRowIndex];
      if (!newRow) return;

      const newType = newColIndex === 0 ? 'state' : currentSymbols[newColIndex - 1];
      this.selectCell(newRow.id, newType);

      setTimeout(() => {
        const tableRows = Array.from(document.querySelectorAll('tbody tr'));
        if (tableRows[newRowIndex]) {
          const cells = Array.from(tableRows[newRowIndex].querySelectorAll('td'));
          const targetCell = cells[newColIndex] as HTMLElement;
          if (targetCell) targetCell.focus();
        }
      }, 0);
    }
  }

  trackRowById(index: number, row: TableRow): number { return row.id; }
  trackSymbol(index: number, symbol: string): string { return symbol; }
  trackDisplayState(index: number, ds: DisplayState): string { return `${ds.state.id}-${ds.status}`; }
  trackDisplayMarker(index: number, dm: DisplayMarker): string { return `${dm.id}-${dm.status}`; }
}