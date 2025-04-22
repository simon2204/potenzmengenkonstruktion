import { Component, ViewChild, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core'; // Added OnInit, OnDestroy
import { CommonModule } from '@angular/common';
import { StateBlockComponent, StateStatus } from "./state-block/state-block.component";
import { EndlicherState } from "../endlicherautomat/EndlicherState";
import { StatemachineService } from "../../../statemachine/src/lib/statemachine/statemachine.service";
import { EndlicheTransition } from "../endlicherautomat/EndlicheTransition";
import { Point } from "../../../statemachine/src/lib/statemachine/drawingprimitives/Point";
import { DfaSolutionTableComponent, MarkerItem, SolutionTableRow } from "../dfa-solution-table/dfa-solution-table.component"; // Import SolutionTableRow explizit
import { EndlicherAutomat } from "../endlicherautomat/EndlicherAutomat";
import { Subscription } from 'rxjs'; // Import Subscription

// Interfaces (DisplayState, DisplayMarker, TableRow) bleiben wie gehabt
// ... (Interfaces hier einfügen, falls nicht schon vorhanden) ...
interface DisplayState {
  state: EndlicherState;
  status: StateStatus;
}

interface DisplayMarker {
  id: string; // z.B. '(A)'
  label: string; // z.B. 'A'
  color: string;
  status: StateStatus;
}

interface TableRow {
  id: number; // Eindeutige ID für ngFor tracking
  rowStatus: 'original' | 'correct' | 'incorrect' | 'missing' | 'partial'; // Status der ganzen Zeile
  displayStates: DisplayState[]; // Für SDFA-Spalte
  displayMarkers: DisplayMarker[]; // Für SDFA-Spalte
  displayTransitions: { [symbol: string]: DisplayState[] };
  // Speichern der Originaldaten *vor* dem Check
  originalStatesBeforeCheck?: DisplayState[];
  originalMarkersBeforeCheck?: DisplayMarker[];
  originalTransitionsBeforeCheck?: { [symbol: string]: DisplayState[] };
  // Key basierend auf den *Lösungs*-Zuständen, für Matching
  solutionStateKey?: string;
}


@Component({
  selector: 'app-inputTable',
  templateUrl: './inputTable.component.html',
  styleUrls: ['./inputTable.component.scss'],
  standalone: true,
  imports: [CommonModule, StateBlockComponent, DfaSolutionTableComponent]
})
export class InputTableComponent implements OnInit, OnDestroy { // Implementiere OnInit, OnDestroy

  @ViewChild(DfaSolutionTableComponent) dfaSolutionTable!: DfaSolutionTableComponent;

  private emptyState: EndlicherState;
  private serviceSubscription: Subscription | null = null; // Für Änderungen am Automaten

  // Zustand vor dem Check speichern
  private originalTableDataBeforeCheck: TableRow[] | null = null;

  get stateMachine(): EndlicherAutomat {
    return this.service.stateMachine as EndlicherAutomat;
  }

  get availableStates(): EndlicherState[] {
    // Stelle sicher, dass emptyState nicht doppelt hinzugefügt wird, falls es schon in service.states ist
    const states = this.service.states as EndlicherState[];
    const hasEmpty = states.some(s => s.id === this.emptyState.id);
    return hasEmpty ? states : [this.emptyState, ...states];
  }

  markers: MarkerItem[] = [
    { id: '(A)', label: 'A', color: '#f59e0b' },
    { id: '(E)', label: 'E', color: '#ef4444' }
  ];

  // Beziehe Symbole primär aus der Lösungstabelle, wenn verfügbar, sonst vom Service
  get symbols(): string[] {
    let uniqueSymbols: Set<string>;
    if (this.dfaSolutionTable?.symbols && this.dfaSolutionTable.symbols.length > 0) {
      uniqueSymbols = new Set(this.dfaSolutionTable.symbols);
    } else {
      uniqueSymbols = new Set();
      if (this.service.transitions) {
        for (const transition of this.service.transitions) {
          for (const symbol of (transition as EndlicheTransition).transitionSymbols) {
            if (symbol !== EndlicherAutomat.epsilon && typeof symbol === 'string') {
              uniqueSymbols.add(symbol);
            }
          }
        }
      }
    }
    return Array.from(uniqueSymbols).sort();
  }

  tableData: TableRow[] = [];
  activeCell: number | null = null;
  activeCellType: string | null = null;
  isCheckMode: boolean = false;

  constructor(public service: StatemachineService, private cdRef: ChangeDetectorRef) {
    const state = new EndlicherState(Point.zero, -1); // ID -1 für leeren Zustand
    state.name = "∅";
    this.emptyState = state;
  }

  ngOnInit(): void {
    this.initializeEmptyTable();
    // // Auf Änderungen am Automaten lauschen (z.B. neue Zustände/Übergänge vom Benutzer hinzugefügt)
    // this.serviceSubscription = this.service.stateMachineUpdated.subscribe(() => {
    //   // Wenn sich der Automat ändert, Tabelle neu initialisieren? Oder nur Symbole/availableStates aktualisieren?
    //   // Vorsicht: Das könnte Benutzereingaben löschen.
    //   // Besser nur die Palette aktualisieren und ggf. Symbole neu berechnen.
    //   // Wenn der Check-Modus aktiv ist, sollte nichts passieren.
    //   if (!this.isCheckMode) {
    //     console.log("Statemachine updated, recalculating symbols and potentially adjusting table.");
    //     // Symbole könnten sich geändert haben -> Default Transitions neu setzen für neue Zeilen
    //     // Bestehende Zeilen behalten ihre Struktur
    //     this.cdRef.detectChanges(); // Update availableStates/symbols im Template
    //     // Ggf. adjustEmptyRows aufrufen, falls sich Symbole geändert haben? Eher nicht.
    //   }
    // });
  }

  ngOnDestroy(): void {
    // Subscription aufräumen
    this.serviceSubscription?.unsubscribe();
  }


  initializeEmptyTable(): void {
    this.tableData = [{
      id: 1,
      rowStatus: 'original',
      displayStates: [],
      displayMarkers: [],
      displayTransitions: this.getDefaultDisplayTransitions(),
      // Keine original*BeforeCheck Daten bei Initialisierung
    }];
    this.isCheckMode = false;
    this.activeCell = null;
    this.activeCellType = null;
    this.originalTableDataBeforeCheck = null; // Auch hier zurücksetzen
    // Sicherstellen, dass nach Initialisierung mindestens eine leere Zeile da ist, falls adjust sie entfernt hat
    this.adjustEmptyRows();
  }

  // --- Check-Modus Logik ---

  async checkTable(): Promise<void> {
    if (this.isCheckMode) { // Wenn schon im Check-Modus, nichts tun
      return;
    }
    if (!this.dfaSolutionTable) {
      alert("Fehler: Lösungs-Komponente nicht gefunden.");
      return;
    }
    if (!this.stateMachine) {
      alert("Kein Automat vorhanden, um Lösung zu generieren.");
      return;
    }

    console.log("Starte Generierung der Lösung für Vergleich...");
    let solutionData: SolutionTableRow[];
    try {
      // Stelle sicher, dass die Solution-Komponente den aktuellen Automaten hat
      this.dfaSolutionTable.automat = this.stateMachine;
      // Baue die State Map auf (notwendig für Farbgebung und interne Logik der Solution-Table)
      this.dfaSolutionTable.buildNfaStateMap();
      // Generiere die Lösung synchron
      solutionData = this.dfaSolutionTable.generateSolutionTableDataInternal();
      console.log("Lösung generiert:", solutionData);
    } catch (error: any) {
      alert(`Lösung konnte nicht generiert werden: ${error.message}`);
      console.error("Fehler beim Generieren der Lösung:", error);
      return;
    }

    if (!solutionData) { // Sollte durch try/catch abgedeckt sein, aber sicher ist sicher
      alert("Lösung konnte nicht generiert werden (unerwarteter Zustand).");
      return;
    }

    // **WICHTIG: Aktuellen Zustand VOR dem Vergleich speichern**
    // Tiefe Kopie erstellen, um spätere Änderungen an tableData zu isolieren
    this.originalTableDataBeforeCheck = JSON.parse(JSON.stringify(this.tableData));

    // Vergleich durchführen und tableData mit Ergebnissen überschreiben
    this.performComparison(solutionData);

    // In den Check-Modus wechseln
    this.isCheckMode = true;
    this.activeCell = null;
    this.activeCellType = null;
    this.cdRef.detectChanges();
    // alert("Prüfung abgeschlossen. Die Tabelle zeigt nun die Ergebnisse an."); // Optional
  }

  // Methode zum Verlassen des Check-Modus
  exitCheckMode(): void {
    if (this.originalTableDataBeforeCheck) {
      // Stelle die gespeicherten Daten wieder her (tiefe Kopie)
      this.tableData = JSON.parse(JSON.stringify(this.originalTableDataBeforeCheck));
      this.originalTableDataBeforeCheck = null; // Speicher leeren
      this.isCheckMode = false;
      this.activeCell = null;
      this.activeCellType = null;
      // Nach dem Wiederherstellen ggf. leere Zeilen anpassen?
      this.adjustEmptyRows(); // Ja, der gespeicherte Zustand könnte überflüssige leere Zeilen enthalten haben
      this.cdRef.detectChanges();
      console.log("Check-Modus beendet, vorheriger Zustand wiederhergestellt.");
    } else {
      // Fallback, sollte nicht passieren, wenn checkTable korrekt funktioniert
      console.warn("Keine vorherigen Daten zum Wiederherstellen gefunden. Initialisiere Tabelle neu.");
      this.initializeEmptyTable();
    }
  }


  // `performComparison`, `compareStatesAndMarkers`, `compareTransitions` bleiben unverändert
  // ... (Code für diese Methoden hier einfügen) ...
  private performComparison(solutionData: SolutionTableRow[]): void {
    const comparisonResult: TableRow[] = [];
    const solutionMap = new Map<string, SolutionTableRow>();

    // Lösungsdaten vorbereiten
    solutionData.forEach(row => {
      const key = this.getStateSetKey(row.states);
      solutionMap.set(key, row);
    });

    const processedInputRowIds = new Set<number>(); // Verfolgen, welche Eingabezeilen schon gematcht wurden

    // 1. Phase: Gehe Eingabezeilen durch und vergleiche mit der Lösung
    this.tableData.forEach(inputRow => {
      const inputKey = this.getStateSetKeyFromDisplay(inputRow.displayStates);
      const matchingSolutionRow = solutionMap.get(inputKey);

      // Kopiere die Originaldaten in die "BeforeCheck"-Felder für die Wiederherstellung
      // WICHTIG: Dies muss *vor* dem Überschreiben von displayStates etc. geschehen!
      // Da wir aber oben schon `originalTableDataBeforeCheck` gespeichert haben,
      // brauchen wir diese Felder in TableRow vielleicht nicht mehr.
      // Lassen wir sie vorerst weg, um Komplexität zu reduzieren.

      const comparedRow: TableRow = {
        id: inputRow.id, // ID beibehalten
        rowStatus: 'original', // Default, wird angepasst
        displayStates: [],
        displayMarkers: [],
        displayTransitions: {},
        solutionStateKey: inputKey // Key der ursprünglichen Eingabe
      };

      if (matchingSolutionRow) {
        // Zeile existiert in der Lösung -> Vergleiche Inhalt
        comparedRow.rowStatus = 'correct'; // Annahme

        const { states, markers } = this.compareStatesAndMarkers(
            inputRow.displayStates.map(ds => ds.state),
            inputRow.displayMarkers.map(dm => dm.id),
            matchingSolutionRow.states,
            matchingSolutionRow.markers
        );
        comparedRow.displayStates = states;
        comparedRow.displayMarkers = markers;

        if (states.some(s => s.status !== 'correct') || markers.some(m => m.status !== 'correct')) {
          comparedRow.rowStatus = 'partial';
        }

        comparedRow.displayTransitions = this.compareTransitions(
            inputRow.displayTransitions,
            matchingSolutionRow.transitions
        );

        if (Object.values(comparedRow.displayTransitions).flat().some(s => s.status !== 'correct')) {
          comparedRow.rowStatus = 'partial';
        }

        solutionMap.delete(inputKey); // Lösungszeile wurde gefunden
        processedInputRowIds.add(inputRow.id); // Markiere Eingabezeile als verarbeitet

      } else {
        // Eingabezeile existiert NICHT in der Lösung -> komplett falsch
        comparedRow.rowStatus = 'incorrect';
        comparedRow.displayStates = inputRow.displayStates.map(ds => ({ ...ds, status: 'incorrect' }));
        comparedRow.displayMarkers = inputRow.displayMarkers.map(dm => ({ ...dm, status: 'incorrect' }));
        comparedRow.displayTransitions = {};
        this.symbols.forEach(symbol => {
          comparedRow.displayTransitions[symbol] = (inputRow.displayTransitions[symbol] || [])
              .map(ds => ({ state: ds.state, status: 'incorrect' }));
        });
        processedInputRowIds.add(inputRow.id); // Markiere Eingabezeile als verarbeitet (als 'incorrect')
      }
      comparisonResult.push(comparedRow);
    });

    // 2. Phase: Füge fehlende Zeilen aus der Lösung hinzu
    solutionMap.forEach((solutionRow, key) => {
      const missingRow: TableRow = {
        id: this.getNextRowId(comparisonResult), // Neue, eindeutige ID
        rowStatus: 'missing',
        displayStates: solutionRow.states.map(state => ({ state, status: 'missing' })),
        displayMarkers: this.markers
            .filter(m => solutionRow.markers.includes(m.id))
            .map(m => ({ id: m.id, label: m.label, color: m.color, status: 'missing' })),
        displayTransitions: {},
        solutionStateKey: key
      };
      this.symbols.forEach(symbol => {
        missingRow.displayTransitions[symbol] = (solutionRow.transitions[symbol] || [])
            .map(state => ({ state, status: 'missing' }));
      });
      comparisonResult.push(missingRow);
    });

    // Sortiere das Ergebnis für konsistente Anzeige (optional)
    comparisonResult.sort((a, b) => {
      // Priorisiere Startzustand (A-Marker) an den Anfang?
      const aIsStart = a.displayMarkers.some(m => m.id === '(A)');
      const bIsStart = b.displayMarkers.some(m => m.id === '(A)');
      if (aIsStart && !bIsStart) return -1;
      if (!aIsStart && bIsStart) return 1;
      // Sonst nach ID sortieren
      return a.id - b.id;
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
    // const inputStateMap = new Map(inputStates.map(s => [s.id, s])); // Nicht unbedingt nötig

    // Set für schnelles Nachschlagen der Input-IDs
    const inputStateIdSet = new Set(inputStates.map(s => s.id));

    // 1. Prüfe Lösungszustände: Sind sie im Input?
    solutionStates.forEach(solutionState => {
      if (inputStateIdSet.has(solutionState.id)) {
        // Korrekt: Zustand ist in der Lösung und im Input
        resultStates.push({ state: solutionState, status: 'correct' });
      } else {
        // Fehlend: Zustand ist in der Lösung, aber nicht im Input
        resultStates.push({ state: solutionState, status: 'missing' });
      }
    });

    // 2. Prüfe Input-Zustände: Sind sie in der Lösung? (Nur die 'incorrect' finden)
    inputStates.forEach(inputState => {
      if (!solutionStateMap.has(inputState.id)) {
        // Falsch: Zustand ist im Input, aber nicht in der Lösung
        resultStates.push({ state: inputState, status: 'incorrect' });
      }
      // Die 'correct' Fälle wurden schon in Schritt 1 abgedeckt
    });


    // ----- Marker -----
    const resultMarkers: DisplayMarker[] = [];
    const solutionMarkerSet = new Set(solutionMarkerIds);
    const inputMarkerSet = new Set(inputMarkerIds); // Set der eingegebenen Marker-IDs

    // 1. Prüfe Lösungsmarker
    solutionMarkerIds.forEach(solutionMarkerId => {
      const markerDef = this.markers.find(m => m.id === solutionMarkerId);
      if (!markerDef) return;
      if (inputMarkerSet.has(solutionMarkerId)) {
        // Korrekt
        resultMarkers.push({ ...markerDef, status: 'correct' });
      } else {
        // Fehlend
        resultMarkers.push({ ...markerDef, status: 'missing' });
      }
    });

    // 2. Prüfe Input-Marker (nur 'incorrect' finden)
    inputMarkerIds.forEach(inputMarkerId => {
      const markerDef = this.markers.find(m => m.id === inputMarkerId);
      if (!markerDef) return; // Sollte nicht passieren
      if (!solutionMarkerSet.has(inputMarkerId)) {
        // Falsch
        resultMarkers.push({ ...markerDef, status: 'incorrect' });
      }
      // Korrekte Fälle schon abgedeckt
    });

    // Sortieren für konsistente Anzeige
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

      // Nutze die gleiche Logik wie für SDFA-Zellen (ohne Marker)
      const { states: comparedStates } = this.compareStatesAndMarkers(
          inputStates, [],
          solutionStatesForSymbol, []
      );
      result[symbol] = comparedStates;
    });

    return result;
  }


  // --- Hilfsfunktionen (getStateSetKey etc.) ---
  // `getStateSetKey`, `getStateSetKeyFromDisplay`, `getNextRowId`,
  // `getDefaultDisplayTransitions`, `getDefaultTransitions` bleiben unverändert
  // ... (Code für diese Methoden hier einfügen) ...
  private getStateSetKey(states: EndlicherState[]): string {
    if (!states || states.length === 0) return '∅';
    const hasOnlyEmpty = states.length === 1 && states[0]?.id === this.emptyState.id;
    if (hasOnlyEmpty) return '∅';

    const validStates = states.filter(s => s && typeof s.id !== 'undefined' && s.id !== this.emptyState.id);
    if (validStates.length === 0) return '∅';

    return validStates
        .map(s => s.id)
        .sort((a, b) => (a as number) - (b as number))
        .join(',');
  }

  private getStateSetKeyFromDisplay(displayStates: DisplayState[]): string {
    if (!displayStates) return '∅'; // Sicherheitscheck
    return this.getStateSetKey(displayStates.map(ds => ds.state));
  }

  private getNextRowId(currentData: TableRow[]): number {
    if (!currentData || currentData.length === 0) return 1;
    return currentData.reduce((max, row) => Math.max(max, row.id), 0) + 1;
  }

  private getDefaultDisplayTransitions(): { [symbol: string]: DisplayState[] } {
    return Object.fromEntries(this.symbols.map(symbol => [symbol, []]));
  }

  private getDefaultTransitions(): { [symbol: string]: EndlicherState[] } {
    return Object.fromEntries(this.symbols.map(symbol => [symbol, []]));
  }


  // --- UI Interaktionen ---

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

    if (this.activeCellType === 'state') {
      // SDFA-Spalte
      const existingIndex = row.displayStates.findIndex(ds => ds.state.id === state.id);
      if (existingIndex === -1) { // Nur hinzufügen, wenn nicht vorhanden
        row.displayStates.push({ state: state, status: 'original' });
        row.displayStates.sort((a, b) => (a.state.id ?? -1) - (b.state.id ?? -1));
      }
      // Entfernen passiert über removeStateFromCell
    } else {
      // Transitions-Spalte
      const symbol = this.activeCellType as string;
      if (!row.displayTransitions[symbol]) row.displayTransitions[symbol] = [];
      const transitionStates = row.displayTransitions[symbol];
      const existingIndex = transitionStates.findIndex(ds => ds.state.id === state.id);
      if (existingIndex === -1) { // Nur hinzufügen, wenn nicht vorhanden
        transitionStates.push({ state: state, status: 'original' });
        transitionStates.sort((a, b) => (a.state.id ?? -1) - (b.state.id ?? -1));
        // *** Zeilen anpassen NACH Änderung der Transition ***
        this.adjustEmptyRows();
      }
      // Entfernen passiert über removeTransitionState
    }
  }

  removeStateFromCell(rowId: number, displayStateToRemove: DisplayState): void {
    if (this.isCheckMode) return;
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    this.tableData[rowIndex].displayStates = this.tableData[rowIndex].displayStates.filter(
        ds => ds.state.id !== displayStateToRemove.state.id
    );
    // *** Zeilen anpassen, falls die Zeile dadurch leer wird ***
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
      // *** Zeilen anpassen NACH Änderung der Transition ***
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
      row.displayMarkers.push({ ...markerDef, status: 'original' });
      row.displayMarkers.sort((a, b) => a.label.localeCompare(b.label));
    }
    // *** Zeilen anpassen, falls die Zeile dadurch leer wird (unwahrscheinlich, aber sicherheitshalber) ***
    this.adjustEmptyRows();
  }

  // *** NEU: Methode zum dynamischen Anpassen der leeren Zeilen ***
  private adjustEmptyRows(): void {
    if (this.isCheckMode) return; // Nur im Editier-Modus

    const existingStateKeys = new Set<string>();
    this.tableData.forEach(row => {
      const key = this.getStateSetKeyFromDisplay(row.displayStates);
      // Eine Zeile repräsentiert einen Key, wenn sie nicht komplett leer ist ODER der Key '∅' ist
      if (key !== '∅' || row.displayStates.length > 0 || row.displayMarkers.length > 0 ) {
        existingStateKeys.add(key);
      }
    });

    const requiredStateKeys = new Set<string>();
    // Füge den Key der *ersten* Zeile immer hinzu, falls sie nicht leer ist
    if (this.tableData.length > 0) {
      const firstRowKey = this.getStateSetKeyFromDisplay(this.tableData[0].displayStates);
      // Füge hinzu, wenn nicht leer ODER wenn es explizit der leere Zustand ist
      if (firstRowKey !== '∅' || this.tableData[0].displayStates.some(ds => ds.state.id === this.emptyState.id)) {
        requiredStateKeys.add(firstRowKey);
      }
    }

    // Sammle alle Keys aus den Übergangszellen
    this.tableData.forEach(row => {
      this.symbols.forEach(symbol => {
        const targetStates = row.displayTransitions[symbol] || [];
        // Füge den Key hinzu, wenn die Zelle nicht leer ist
        if (targetStates.length > 0) {
          const key = this.getStateSetKeyFromDisplay(targetStates);
          requiredStateKeys.add(key);
        }
        // Wenn die Zelle leer ist, wird kein Key benötigt (außer ∅ wird explizit hinzugefügt)
      });
    });

    // Finde benötigte, aber nicht existierende Keys
    const missingKeys = new Set<string>();
    requiredStateKeys.forEach(key => {
      if (!existingStateKeys.has(key)) {
        missingKeys.add(key);
      }
    });

    // Zähle aktuell vorhandene, *wirklich* leere Zeilen (ohne States, ohne Marker)
    const currentEmptyRows = this.tableData.filter(row =>
            row.displayStates.length === 0 && row.displayMarkers.length === 0
        // Beachte: Transitions können hier ignoriert werden, da eine Zeile mit Transitions,
        // aber ohne States/Marker nicht sinnvoll ist und durch die Logik oben nicht entstehen sollte.
    );
    const currentEmptyRowCount = currentEmptyRows.length;
    const requiredEmptyRowCount = missingKeys.size; // Jede fehlende Menge braucht potenziell eine leere Zeile

    // 1. Füge fehlende leere Zeilen hinzu
    if (currentEmptyRowCount < requiredEmptyRowCount) {
      const diff = requiredEmptyRowCount - currentEmptyRowCount;
      console.log(`Füge ${diff} leere Zeile(n) hinzu.`);
      for (let i = 0; i < diff; i++) {
        this.tableData.push({
          id: this.getNextRowId(this.tableData),
          rowStatus: 'original',
          displayStates: [],
          displayMarkers: [],
          displayTransitions: this.getDefaultDisplayTransitions(),
        });
      }
    }
    // 2. Entferne überschüssige leere Zeilen (von hinten, außer der ersten Zeile)
    else if (currentEmptyRowCount > requiredEmptyRowCount && this.tableData.length > 1) {
      let toRemoveCount = currentEmptyRowCount - requiredEmptyRowCount;
      console.log(`Entferne ${toRemoveCount} leere Zeile(n).`);
      // Iteriere rückwärts, um Probleme mit dem Index zu vermeiden
      for (let i = this.tableData.length - 1; i >= 1 && toRemoveCount > 0; i--) {
        const row = this.tableData[i];
        const isEmpty = row.displayStates.length === 0 && row.displayMarkers.length === 0;
        if (isEmpty) {
          this.tableData.splice(i, 1); // Entferne Zeile am Index i
          toRemoveCount--;
        }
      }
    }

    // Stelle sicher, dass immer mindestens eine Zeile vorhanden ist
    if (this.tableData.length === 0) {
      console.log("Tabelle war komplett leer, füge eine Startzeile hinzu.");
      this.tableData.push({
        id: 1,
        rowStatus: 'original',
        displayStates: [],
        displayMarkers: [],
        displayTransitions: this.getDefaultDisplayTransitions(),
      });
    }
    this.cdRef.detectChanges(); // UI aktualisieren nach Zeilenänderung
  }

  // Angepasste Reset-Logik
  resetTable(): void {
    if (this.isCheckMode) {
      // Check-Modus verlassen und vorherigen Zustand wiederherstellen
      this.exitCheckMode();
    } else {
      // Im Editier-Modus: Tabelle komplett leeren und neu initialisieren
      this.initializeEmptyTable();
    }
    // Optional: Reset der Solution-Tabelle, falls gewünscht
    // if (this.dfaSolutionTable) { ... }
  }

  // Farb-Helper (bleiben gleich)
  // ... (getStateColor, getMarkerColor, hslToHex) ...
  getStateColor(stateId: number | string): string {
    if (stateId === this.emptyState.id) return '#aaaaaa'; // Grau für leeren Zustand
    if (this.dfaSolutionTable) {
      return this.dfaSolutionTable.getStateColor(stateId);
    }
    // Fallback
    const state = this.availableStates.find(s => s.id === stateId);
    if (!state) return '#000000';
    const allRealStates = this.availableStates.filter(s => s.id !== this.emptyState.id);
    const total = allRealStates.length;
    if (total === 0) return '#222222';
    const stateIndex = allRealStates.findIndex(s => s.id === stateId);
    if (stateIndex === -1) return '#444444';
    const hue = Math.floor((360 / total) * stateIndex);
    return this.hslToHex(hue, 80, 40);
  }

  getMarkerColor(markerId: string): string {
    const marker = this.markers.find(m => m.id === markerId);
    return marker ? marker.color : '#000000';
  }

  hslToHex(h: number, s: number, l: number): string {
    s /= 100; l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }
    const R = Math.round((r + m) * 255);
    const G = Math.round((g + m) * 255);
    const B = Math.round((b + m) * 255);
    return '#' + [R, G, B].map(val => val.toString(16).padStart(2, '0')).join('');
  }

  // Tastatur-Navigation (im Check-Modus deaktivieren)
  handleKeyDown(event: KeyboardEvent, rowId: number, type: string): void {
    if (this.isCheckMode) return; // Keine Navigation im Check-Modus

    // Aktuelle Zelle auswählen, wenn sie noch nicht ausgewählt ist oder neu fokussiert wird
    if (this.activeCell !== rowId || this.activeCellType !== type) {
      this.selectCell(rowId, type);
      // Event nicht sofort weiterverarbeiten, da der Fokuswechsel Vorrang hat
      // Man könnte hier returnen, aber das würde die sofortige Navigation verhindern.
      // Wir lassen es erstmal weiterlaufen.
    }


    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    // Spaltenindex: 0 für 'state', 1 bis N für Symbole
    let colIndex = type === 'state' ? 0 : this.symbols.indexOf(type) + 1;

    if (rowIndex === -1 || colIndex < 0) {
      console.error("Aktive Zelle für Keydown nicht gefunden.");
      return; // Sollte nicht passieren
    }


    let newRowIndex = rowIndex;
    let newColIndex = colIndex;
    let moved = false;

    // Navigation mit Pfeiltasten
    switch (event.key) {
      case 'ArrowUp':
        newRowIndex = Math.max(0, rowIndex - 1);
        moved = true;
        break;
      case 'ArrowDown':
        newRowIndex = Math.min(this.tableData.length - 1, rowIndex + 1);
        moved = true;
        break;
      case 'ArrowLeft':
        newColIndex = Math.max(0, colIndex - 1);
        moved = true;
        break;
      case 'ArrowRight':
        // Beachte: Maximale Spaltenanzahl ist Anzahl Symbole + 1 (für 'state')
        newColIndex = Math.min(this.symbols.length, colIndex + 1);
        moved = true;
        break;
        // Enter oder Leertaste könnten hier Aktionen auslösen,
        // z.B. einen Zustand hinzufügen/entfernen, wenn Palette aktiv ist.
        // Aktuell keine Aktion implementiert.
        // case 'Enter':
        // case ' ':
        //   event.preventDefault();
        //   return;
    }

    if (moved) {
      event.preventDefault(); // Verhindere Standard-Scrollverhalten

      // Neue aktive Zelle bestimmen
      const newRow = this.tableData[newRowIndex];
      if (!newRow) return; // Sollte nicht passieren
      const newType = newColIndex === 0 ? 'state' : this.symbols[newColIndex - 1];

      // Neue Zelle auswählen (setzt activeCell/activeCellType)
      this.selectCell(newRow.id, newType);

      // Fokus auf die neue Zelle setzen (nach kurzem Timeout, damit Angular rendern kann)
      setTimeout(() => {
        const tableRows = Array.from(document.querySelectorAll('tbody tr'));
        if (tableRows[newRowIndex]) {
          const cells = Array.from(tableRows[newRowIndex].querySelectorAll('td'));
          const targetCell = cells[newColIndex] as HTMLElement;
          if (targetCell) {
            targetCell.focus();
          }
        }
      }, 0);
    }
  }

  // TrackBy Funktionen (bleiben gleich)
  trackRowById(index: number, row: TableRow): number { return row.id; }
  trackSymbol(index: number, symbol: string): string { return symbol; }
  trackDisplayState(index: number, ds: DisplayState): string { return `${ds.state.id}-${ds.status}`; }
  trackDisplayMarker(index: number, dm: DisplayMarker): string { return `${dm.id}-${dm.status}`; }

}