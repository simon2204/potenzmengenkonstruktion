// Erweiterte Version von inputTable.component.ts mit Speicher- und Ladefunktionalität

import {ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
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
} from '../services/dfa-generator-service.service';
import {EndlicherAutomat, SerializedTableRow, SerializedDisplayState, SerializedDisplayMarker} from "../endlicherautomat/EndlicherAutomat";
import {Subscription} from 'rxjs';
import {StateStatus} from "./stateStatus";

// ----------- Interfaces -----------
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
  private autoSaveInterval: any;
  private autoSaveEnabled: boolean = true;
  private autoSaveIntervalTime: number = 3000; // 3 Sekunden

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
      private dfaGeneratorService: DfaGeneratorService
  ) {
    const state = new EndlicherState(Point.zero, -1);
    state.name = "∅";
    this.emptyState = state;
  }

  ngOnInit(): void {
    this.initializeEmptyTable();
    this.loadTableFromAutomat();
    this.startAutoSave();

    // Subscribe to automaton changes
    this.serviceSubscription = this.service.onAutomatonChanged?.subscribe(() => {
      this.loadTableFromAutomat();
    });
  }

  ngOnDestroy(): void {
    this.serviceSubscription?.unsubscribe();
    this.stopAutoSave();
  }

  private startAutoSave(): void {
    if (this.autoSaveEnabled) {
      this.autoSaveInterval = setInterval(() => {
        this.saveTableToAutomat();
        this.service.saveToBrowserCache();
        console.log('Auto-saved to browser cache');
      }, this.autoSaveIntervalTime);
    }
  }

  private stopAutoSave(): void {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
      this.autoSaveInterval = null;
    }
  }

  private serializeTableData(): SerializedTableRow[] {
    if (this.isCheckMode && this.originalTableDataBeforeCheck) {
      // Im Check-Modus die originalen Daten serialisieren
      return this.serializeTableRows(this.originalTableDataBeforeCheck);
    }
    return this.serializeTableRows(this.tableData);
  }

  private serializeTableRows(rows: TableRow[]): SerializedTableRow[] {
    return rows.map(row => ({
      id: row.id,
      rowStatus: row.rowStatus,
      displayStates: row.displayStates.map(ds => ({
        stateId: ds.state.id ?? -1,
        status: ds.status
      })),
      displayMarkers: row.displayMarkers.map(dm => ({
        id: dm.id,
        label: dm.label,
        status: dm.status
      })),
      displayTransitions: Object.entries(row.displayTransitions).reduce((acc, [symbol, states]) => {
        acc[symbol] = states.map(ds => ({
          stateId: ds.state.id ?? -1,
          status: ds.status
        }));
        return acc;
      }, {} as { [symbol: string]: SerializedDisplayState[] })
    }));
  }

  private deserializeTableData(serializedRows: SerializedTableRow[] | undefined): void {
    if (!serializedRows || serializedRows.length === 0) {
      this.initializeEmptyTable();
      return;
    }

    const stateMap = new Map<number, EndlicherState>();
    stateMap.set(this.emptyState.id, this.emptyState);

    // Build state map from current automaton
    this.stateMachine.getAllStates().forEach(state => {
      const endlicherState = state as EndlicherState;
      stateMap.set(endlicherState.id, endlicherState);
    });

    this.tableData = serializedRows.map(serializedRow => {
      const row: TableRow = {
        id: serializedRow.id,
        rowStatus: serializedRow.rowStatus as TableRow['rowStatus'],
        displayStates: serializedRow.displayStates
            .map(sds => {
              const state = stateMap.get(sds.stateId);
              if (state) {
                return {
                  state: state,
                  status: sds.status as StateStatus
                };
              }
              return null;
            })
            .filter(ds => ds !== null) as DisplayState[],
        displayMarkers: serializedRow.displayMarkers.map(sdm => ({
          id: sdm.id,
          label: sdm.label,
          status: sdm.status as StateStatus
        })),
        displayTransitions: {}
      };

      // Deserialize transitions
      Object.entries(serializedRow.displayTransitions).forEach(([symbol, serializedStates]) => {
        row.displayTransitions[symbol] = serializedStates
            .map(sds => {
              const state = stateMap.get(sds.stateId);
              if (state) {
                return {
                  state: state,
                  status: sds.status as StateStatus
                };
              }
              return null;
            })
            .filter(ds => ds !== null) as DisplayState[];
      });

      return row;
    });

    this.cdRef.detectChanges();
  }

  private saveTableToAutomat(): void {
    if (this.stateMachine) {
      const serializedData = this.serializeTableData();
      this.stateMachine.setTableData(serializedData);
    }
  }

  private loadTableFromAutomat(): void {
    if (this.stateMachine) {
      const tableData = this.stateMachine.getTableData();
      if (tableData && tableData.length > 0) {
        this.deserializeTableData(tableData);
      } else {
        this.initializeEmptyTable();
      }
    }
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
    if (this.stateMachine) {
      return this.dfaGeneratorService.getAlphabet(this.stateMachine);
    }
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
    const finalTableRows: TableRow[] = [];

    const solutionMap = new Map<string, SolutionTableRow>();
    solutionData.forEach(sr => {
      const key = this.dfaGeneratorService.getStateSetKey(sr.states);
      solutionMap.set(key, sr);
    });

    const processedSolutionKeys = new Set<string>();

    (this.originalTableDataBeforeCheck || []).forEach(originalInputRow => {
      const inputKey = this.getStateSetKeyFromDisplay(originalInputRow.displayStates);
      const matchingSolutionRow = solutionMap.get(inputKey);
      let comparedRow: TableRow;

      if (matchingSolutionRow) {
        processedSolutionKeys.add(inputKey);
        let currentStatus: 'correct' | 'partial' = 'correct';

        const { states, markers } = this.compareStatesAndMarkers(
            originalInputRow.displayStates.map(ds => ds.state),
            originalInputRow.displayMarkers.map(dm => dm.id),
            matchingSolutionRow.states,
            matchingSolutionRow.markers
        );

        if (states.some(s => s.status !== StateStatus.correct) || markers.some(m => m.status !== StateStatus.correct)) {
          currentStatus = 'partial';
        }

        const comparedTransitions = this.compareTransitions(
            originalInputRow.displayTransitions,
            matchingSolutionRow.transitions
        );

        if (Object.values(comparedTransitions).flat().some(s => s.status !== StateStatus.correct)) {
          currentStatus = 'partial';
        }

        comparedRow = {
          id: originalInputRow.id,
          rowStatus: currentStatus,
          displayStates: states,
          displayMarkers: markers,
          displayTransitions: comparedTransitions,
          solutionStateKey: inputKey
        };

      } else {
        comparedRow = {
          id: originalInputRow.id,
          rowStatus: 'incorrect',
          displayStates: originalInputRow.displayStates.map(ds => ({ ...ds, status: StateStatus.incorrect })),
          displayMarkers: originalInputRow.displayMarkers.map(dm => ({ ...dm, status: StateStatus.incorrect })),
          displayTransitions: {},
          solutionStateKey: inputKey
        };
        this.symbols.forEach(symbol => {
          comparedRow.displayTransitions[symbol] = (originalInputRow.displayTransitions[symbol] || [])
              .map(ds => ({ state: ds.state, status: StateStatus.incorrect }));
        });
      }
      finalTableRows.push(comparedRow);
    });

    solutionData.forEach(solutionRow => {
      const solutionKey = this.dfaGeneratorService.getStateSetKey(solutionRow.states);
      if (!processedSolutionKeys.has(solutionKey)) {
        const missingRow: TableRow = {
          id: this.getNextRowId(finalTableRows),
          rowStatus: 'missing',
          displayStates: solutionRow.states.map(state => ({ state, status: StateStatus.missing })),
          displayMarkers: this.markers
              .filter(m => solutionRow.markers.includes(m.id))
              .map(m => ({ id: m.id, label: m.label, status: StateStatus.missing })),
          displayTransitions: {},
          solutionStateKey: solutionKey
        };
        this.symbols.forEach(symbol => {
          missingRow.displayTransitions[symbol] = (solutionRow.transitions[symbol] || [])
              .map(state => ({ state, status: StateStatus.missing }));
        });
        finalTableRows.push(missingRow);
      }
    });

    this.tableData = finalTableRows;
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

  private getStateSetKeyFromDisplay(displayStates: DisplayState[]): string {
    if (!displayStates) return '∅';
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
    this.cdRef.detectChanges();
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
    this.saveTableToAutomat(); // Save after each change
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
    this.saveTableToAutomat();
  }

  removeMarkerFromCell(rowId: number, displayMarkerToRemove: DisplayMarker): void {
    if (this.isCheckMode) return;
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    this.tableData[rowIndex].displayMarkers = this.tableData[rowIndex].displayMarkers.filter(
        ds => ds.id !== displayMarkerToRemove.id
    );
    this.adjustEmptyRows();
    this.saveTableToAutomat();
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
      this.saveTableToAutomat();
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
    this.saveTableToAutomat();
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
      this.saveTableToAutomat();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleGlobalKeyDown(event: KeyboardEvent): void {
    if (this.isCheckMode) {
      return;
    }

    // Tab-Taste Behandlung
    if (this.activeCell && this.activeCellType && event.key === 'Tab' && !event.shiftKey) {
      const activeRowIndex = this.tableData.findIndex(row => row.id === this.activeCell);
      if (activeRowIndex !== -1) {
        const currentSymbols = this.symbols;
        const activeColIndex = this.activeCellType === 'state' ? 0 : currentSymbols.indexOf(this.activeCellType) + 1;

        const isValidColumn = this.activeCellType === 'state' || (activeColIndex > 0 && activeColIndex <= currentSymbols.length);

        if (isValidColumn) {
          const tableRows = Array.from(document.querySelectorAll('tbody tr'));
          const activeRowElement = tableRows[activeRowIndex] as HTMLElement;
          if (activeRowElement) {
            const cellsInActiveRow = Array.from(activeRowElement.querySelectorAll('td'));
            const activeCellElement = cellsInActiveRow[activeColIndex] as HTMLElement;

            if (activeCellElement) {
              if (document.activeElement !== activeCellElement) {
                activeCellElement.focus();
                return;
              }
            }
          }
        }
      }
    }

    // Pfeiltasten-Logik
    if (!this.activeCell || !this.activeCellType) {
      return;
    }

    const validArrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (!validArrowKeys.includes(event.key)) {
      return;
    }

    const currentRowId = this.activeCell;
    const currentCellType = this.activeCellType;

    const rowIndex = this.tableData.findIndex(row => row.id === currentRowId);
    if (rowIndex === -1) return;

    const currentSymbols = this.symbols;
    let colIndex = currentCellType === 'state' ? 0 : currentSymbols.indexOf(currentCellType) + 1;
    const isValidCurrentColumn = currentCellType === 'state' || (colIndex > 0 && colIndex <= currentSymbols.length);
    if (!isValidCurrentColumn) return;

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
      if (newType === undefined && newColIndex > 0) return;

      this.selectCell(newRow.id, newType);

      setTimeout(() => {
        const tableRows = Array.from(document.querySelectorAll('tbody tr'));
        const targetRowElement = tableRows[newRowIndex] as HTMLElement;
        if (targetRowElement) {
          const cells = Array.from(targetRowElement.querySelectorAll('td'));
          const targetCellElement = cells[newColIndex] as HTMLElement;
          if (targetCellElement) {
            targetCellElement.focus();
          }
        }
      }, 0);
    }
  }

  trackRowById(index: number, row: TableRow): number { return row.id; }
  trackSymbol(index: number, symbol: string): string { return symbol; }
  trackDisplayState(index: number, ds: DisplayState): string { return `${ds.state.id}-${ds.status}`; }
  trackDisplayMarker(index: number, dm: DisplayMarker): string { return `${dm.id}-${dm.status}`; }
}