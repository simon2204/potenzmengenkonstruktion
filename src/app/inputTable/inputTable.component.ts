import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StateBlockComponent} from "./state-block/state-block.component";
import {EndlicherState} from "../endlicherautomat/EndlicherState";
import {StatemachineService} from "../../../statemachine/src/lib/statemachine/statemachine.service";
import {EndlicheTransition} from "../endlicherautomat/EndlicheTransition";
import {Point} from "../../../statemachine/src/lib/statemachine/drawingprimitives/Point";
import {
  DfaSolutionTableComponent,
  MarkerItem,
  SolutionTableRow
} from "../dfa-solution-table/dfa-solution-table.component";
import {EndlicherAutomat} from "../endlicherautomat/EndlicherAutomat";
import {Subscription} from 'rxjs';
import {StateStatus} from "./stateStatus";

// ----------- Interfaces -----------
// Struktur für Zustände in der Anzeige (mit Status)
interface DisplayState {
  state: EndlicherState;
  status: StateStatus;
}

// Struktur für Marker in der Anzeige (mit Status)
interface DisplayMarker {
  id: string; // z.B. '(A)'
  label: string; // z.B. 'A'
  status: StateStatus;
}

// Struktur für eine Zeile in der Eingabetabelle
interface TableRow {
  id: number; // Eindeutige ID für ngFor tracking
  rowStatus: 'original' | 'correct' | 'incorrect' | 'missing' | 'partial'; // Status der ganzen Zeile im Check-Modus
  displayStates: DisplayState[]; // Zustände in der ersten Spalte (SDFA)
  displayMarkers: DisplayMarker[]; // Marker in der ersten Spalte (SDFA)
  displayTransitions: { [symbol: string]: DisplayState[] }; // Übergänge für jedes Symbol
  solutionStateKey?: string; // Der Key der Zustandsmenge (für Abgleich mit Lösung)
}
// ----------- Ende Interfaces -----------

@Component({
  selector: 'app-inputTable',
  templateUrl: './inputTable.component.html',
  styleUrls: ['./inputTable.component.scss'],
  standalone: true,
  imports: [CommonModule, StateBlockComponent, DfaSolutionTableComponent] // Notwendige Module/Komponenten
})
export class InputTableComponent implements OnInit, OnDestroy {

  // Referenz zur Lösungstabellen-Komponente
  @ViewChild(DfaSolutionTableComponent) dfaSolutionTable!: DfaSolutionTableComponent;

  // Privater Leerer Zustand (für ∅-Darstellung)
  private emptyState: EndlicherState;
  // Subscription für Updates vom StatemachineService
  private serviceSubscription: Subscription | null = null;
  // Speichert den Zustand der Tabelle, bevor der Check-Modus aktiviert wird
  private originalTableDataBeforeCheck: TableRow[] | null = null;

  // Definiert verfügbare Marker
  markers: MarkerItem[] = [
    { id: '(A)', label: 'A' }, // Startzustand
    { id: '(E)', label: 'E' }  // Endzustand
  ];

  // Daten der Eingabetabelle
  tableData: TableRow[] = [];
  // Aktuell ausgewählte Zelle für Bearbeitung
  activeCell: number | null = null; // row.id der aktiven Zeile
  activeCellType: string | null = null; // 'state' oder Symbol-String
  // Zustand für den Check-Modus
  isCheckMode: boolean = false;

  /**
   * Konstruktor: Initialisiert leeren Zustand und injiziert Services.
   */
  constructor(public service: StatemachineService, private cdRef: ChangeDetectorRef) {
    const state = new EndlicherState(Point.zero, -1); // Feste ID -1 für ∅
    state.name = "∅";
    this.emptyState = state;
  }

  /**
   * OnInit Lifecycle Hook: Initialisiert die Tabelle und abonniert Service-Updates.
   */
  ngOnInit(): void {
    this.initializeEmptyTable();
  }

  /**
   * OnDestroy Lifecycle Hook: Bereinigt das Service-Abonnement.
   */
  ngOnDestroy(): void {
    this.serviceSubscription?.unsubscribe();
  }

  // ----------- Getters -----------

  /** Liefert den aktuellen endlichen Automaten vom Service. */
  get stateMachine(): EndlicherAutomat {
    return this.service.stateMachine as EndlicherAutomat;
  }

  /** Liefert die Liste der verfügbaren Zustände (inkl. ∅) für die Palette. */
  get availableStates(): EndlicherState[] {
    const states = (this.service.states || []) as EndlicherState[];
    // Sicherstellen, dass ∅ nur einmal vorkommt und am Anfang steht
    const realStates = states.filter(s => s.id !== this.emptyState.id);
    return [this.emptyState, ...realStates];
  }

  /** Liefert das Alphabet (sortierte Liste der Symbole ohne ε). */
  get symbols(): string[] {
    let uniqueSymbols: Set<string>;
    // Priorisiere Symbole aus der (potenziell generierten) Lösungstabelle für Konsistenz
    if (this.dfaSolutionTable?.symbols && this.dfaSolutionTable.symbols.length > 0) {
      uniqueSymbols = new Set(this.dfaSolutionTable.symbols);
    } else { // Fallback auf Service, wenn Lösungstabelle (noch) keine Symbole hat
      uniqueSymbols = new Set();
      if (this.service.transitions) {
        for (const transition of this.service.transitions) {
          for (const symbol of (transition as EndlicheTransition).transitionSymbols) {
            if (symbol !== EndlicherAutomat.epsilon) {
              uniqueSymbols.add(symbol);
            }
          }
        }
      }
    }
    // Stelle sicher, dass Symbole aus dem Service auch drin sind (falls Lösung noch nicht aktuell)
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

  // ----------- Tabelleninitialisierung -----------

  /**
   * Setzt die Tabelle auf den Ausgangszustand zurück (eine leere Zeile).
   * Wird beim Start und beim Zurücksetzen im Editier-Modus aufgerufen.
   */
  initializeEmptyTable(): void {
    this.tableData = [{
      id: 1, // Starte mit ID 1
      rowStatus: 'original',
      displayStates: [],
      displayMarkers: [],
      displayTransitions: this.getDefaultDisplayTransitions(), // Leere Übergänge für aktuelle Symbole
    }];
    this.isCheckMode = false;
    this.activeCell = null;
    this.activeCellType = null;
    this.originalTableDataBeforeCheck = null; // Wichtig: Auch hier zurücksetzen
  }

  // ----------- Check-Modus Funktionalität -----------

  /**
   * Startet den Vergleichsprozess:
   * 1. Generiert die Lösung über die DfaSolutionTableComponent.
   * 2. Speichert den aktuellen Zustand der Eingabetabelle.
   * 3. Führt den Vergleich durch (`performComparisonBasedOnSolutionOrder`).
   * 4. Aktiviert den Check-Modus.
   */
  async checkTable(): Promise<void> {
    // Verhindere Ausführung, wenn schon im Check-Modus oder Abhängigkeiten fehlen
    if (this.isCheckMode) { return; }
    if (!this.dfaSolutionTable) { alert("Fehler: Lösungs-Komponente nicht gefunden."); return; }
    if (!this.stateMachine) { alert("Kein Automat vorhanden, um Lösung zu generieren."); return; }

    console.log("Starte Generierung der Lösung für Vergleich...");
    let solutionData: SolutionTableRow[];
    try {
      // Stelle sicher, dass die Lösungs-Komponente den aktuellen Automaten hat
      this.dfaSolutionTable.automat = this.stateMachine;
      // Bereite die interne Zustand-Map der Lösungs-Komponente vor
      this.dfaSolutionTable.buildNfaStateMap();
      // Generiere die Lösungsdaten synchron
      solutionData = this.dfaSolutionTable.generateSolutionTableDataInternal();
      console.log("Lösung generiert:", solutionData);
    } catch (error: any) {
      // Zeige Fehler bei der Lösungsgenerierung an
      alert(`Lösung konnte nicht generiert werden: ${error.message}`);
      console.error("Fehler beim Generieren der Lösung:", error);
      return;
    }

    // Sicherheitscheck, falls generateSolution... wider Erwarten null liefert
    if (!solutionData) { alert("Lösung konnte nicht generiert werden (unerwarteter Zustand)."); return; }

    // **WICHTIG**: Tiefe Kopie des aktuellen Zustands VOR dem Vergleich speichern
    this.originalTableDataBeforeCheck = JSON.parse(JSON.stringify(this.tableData));

    // Führe den Vergleich durch und aktualisiere tableData mit den Ergebnissen
    this.performComparisonBasedOnSolutionOrder(solutionData);

    // Aktiviere den Check-Modus und deaktiviere Zellenauswahl
    this.isCheckMode = true;
    this.activeCell = null;
    this.activeCellType = null;
    this.cdRef.detectChanges(); // Informiere Angular über die Änderungen
  }

  /**
   * Beendet den Check-Modus und stellt den Zustand der Tabelle vor dem Check wieder her.
   */
  exitCheckMode(): void {
    if (this.originalTableDataBeforeCheck) {
      // Stelle Daten aus der tiefen Kopie wieder her
      this.tableData = JSON.parse(JSON.stringify(this.originalTableDataBeforeCheck));
      this.originalTableDataBeforeCheck = null; // Speicher leeren
      this.isCheckMode = false;
      this.activeCell = null;
      this.activeCellType = null;
      // Bereinige ggf. überflüssige leere Zeilen im wiederhergestellten Zustand
      this.adjustEmptyRows();
      this.cdRef.detectChanges(); // UI aktualisieren
      console.log("Check-Modus beendet, vorheriger Zustand wiederhergestellt.");
    } else {
      // Fallback, falls keine Daten gespeichert wurden (sollte nicht passieren)
      console.warn("Keine vorherigen Daten zum Wiederherstellen gefunden. Initialisiere Tabelle neu.");
      this.initializeEmptyTable();
    }
  }

  /**
   * Vergleicht die Benutzereingabe (vor dem Check gespeichert) mit der generierten Lösung.
   * Die Reihenfolge der Ergebniszeilen richtet sich nach der Reihenfolge der Lösungszeilen.
   * Falsche Benutzereingaben werden am Ende angehängt.
   * @param solutionData Die korrekt generierten Lösungszeilen in der richtigen Reihenfolge.
   */
  private performComparisonBasedOnSolutionOrder(solutionData: SolutionTableRow[]): void {
    const comparisonResult: TableRow[] = []; // Array für das Ergebnis
    const processedOriginalInputRowIds = new Set<number>(); // Merkt sich verarbeitete Original-IDs

    // 1. Map der Original-Eingabezeilen (vor dem Check!) für schnellen Zugriff über den Key
    const originalInputMap = new Map<string, TableRow>();
    (this.originalTableDataBeforeCheck || []).forEach(inputRow => {
      const key = this.getStateSetKeyFromDisplay(inputRow.displayStates);
      // Nur die erste Zeile mit einem Key speichern, falls Duplikate eingegeben wurden
      if (!originalInputMap.has(key)) {
        originalInputMap.set(key, inputRow);
      } else {
        console.warn(`performComparison: Duplicate input key '${key}' found. Using first occurrence.`);
      }
    });

    // 2. Iteriere durch die Lösungszeilen in ihrer korrekten Reihenfolge (z.B. BFS-Reihenfolge)
    solutionData.forEach((solutionRow) => {
      const solutionKey = this.getStateSetKey(solutionRow.states);
      const matchingOriginalInputRow = originalInputMap.get(solutionKey);

      let resultRow: TableRow; // Die Ergebniszeile für diese Lösungszeile

      if (matchingOriginalInputRow) {
        // --- Fall A: Passende Original-Eingabezeile gefunden ---
        // Diese Zeile existierte in der Benutzereingabe und auch in der Lösung.
        resultRow = {
          id: matchingOriginalInputRow.id, // Behalte die ID der ursprünglichen Eingabezeile bei
          rowStatus: 'correct', // Annahme: korrekt, wird evtl. zu 'partial'
          displayStates: [],    // Wird durch Vergleich gefüllt
          displayMarkers: [],   // Wird durch Vergleich gefüllt
          displayTransitions: {}, // Wird durch Vergleich gefüllt
          solutionStateKey: solutionKey
        };

        // Führe den detaillierten Vergleich für Zustände und Marker durch
        const { states, markers } = this.compareStatesAndMarkers(
            matchingOriginalInputRow.displayStates.map(ds => ds.state), // Nur die Zustände aus der Eingabe
            matchingOriginalInputRow.displayMarkers.map(dm => dm.id),    // Nur die Marker-IDs aus der Eingabe
            solutionRow.states,                                         // Zustände aus der Lösung
            solutionRow.markers                                         // Marker aus der Lösung
        );
        resultRow.displayStates = states;
        resultRow.displayMarkers = markers;

        // Wenn Zustände oder Marker nicht 100% korrekt sind, setze Status auf 'partial'
        if (states.some(s => s.status !== StateStatus.correct) || markers.some(m => m.status !== StateStatus.correct)) {
          resultRow.rowStatus = 'partial';
        }

        // Führe den detaillierten Vergleich für die Übergänge durch
        resultRow.displayTransitions = this.compareTransitions(
            matchingOriginalInputRow.displayTransitions, // Übergänge aus der Eingabe
            solutionRow.transitions                     // Übergänge aus der Lösung
        );

        // Wenn irgendein Zustand in irgendeinem Übergang nicht korrekt ist, setze Status auf 'partial'
        if (Object.values(resultRow.displayTransitions).flat().some(s => s.status !== StateStatus.correct)) {
          resultRow.rowStatus = 'partial';
        }

        // Markiere die Original-Eingabezeile als verarbeitet
        processedOriginalInputRowIds.add(matchingOriginalInputRow.id);

      } else {
        // --- Fall B: Keine passende Original-Eingabezeile gefunden ---
        // Diese Lösungszeile wurde vom Benutzer nicht (mit diesem Key) eingegeben.
        resultRow = {
          id: this.getNextRowId(comparisonResult), // Generiere eine neue, eindeutige ID
          rowStatus: 'missing',                    // Diese Zeile fehlt in der Eingabe
          // Fülle die Zeile mit den Lösungsdaten, markiere alles als 'missing'
          displayStates: solutionRow.states.map(state => ({ state, status: StateStatus.missing })),
          displayMarkers: this.markers
              .filter(m => solutionRow.markers.includes(m.id)) // Finde passende Marker-Definitionen
              .map(m => ({ id: m.id, label: m.label, status: StateStatus.missing })),
          displayTransitions: {},
          solutionStateKey: solutionKey
        };
        // Fülle die Übergänge der fehlenden Zeile
        this.symbols.forEach(symbol => {
          resultRow.displayTransitions[symbol] = (solutionRow.transitions[symbol] || [])
              .map(state => ({ state, status: StateStatus.missing }));
        });
      }
      // Füge die erstellte Ergebniszeile (entweder verglichen oder fehlend) zum Ergebnis hinzu
      comparisonResult.push(resultRow);
    }); // Ende der Iteration durch solutionData

    // 3. Iteriere durch die Original-Eingabezeilen (vor dem Check!), um die "falschen" zu finden
    (this.originalTableDataBeforeCheck || []).forEach(originalInputRow => {
      // Wenn die ID dieser Originalzeile NICHT in der Menge der verarbeiteten IDs ist...
      if (!processedOriginalInputRowIds.has(originalInputRow.id)) {
        // ...dann ist diese Zeile eine Benutzereingabe ohne Entsprechung in der Lösung.
        const incorrectKey = this.getStateSetKeyFromDisplay(originalInputRow.displayStates);
        console.log(`performComparison: Adding incorrect user row (ID: ${originalInputRow.id}, Key: ${incorrectKey})`);
        const incorrectRow: TableRow = {
          id: originalInputRow.id, // Behalte die Original-ID bei
          rowStatus: 'incorrect',  // Diese Zeile ist komplett falsch
          // Markiere alle Elemente dieser Zeile als 'incorrect'
          displayStates: originalInputRow.displayStates.map(ds => ({ ...ds, status: StateStatus.incorrect })),
          displayMarkers: originalInputRow.displayMarkers.map(dm => ({ ...dm, status: StateStatus.incorrect })),
          displayTransitions: {},
          solutionStateKey: incorrectKey // Der Key der (falschen) Eingabe
        };
        // Fülle die (falschen) Übergänge
        this.symbols.forEach(symbol => {
          incorrectRow.displayTransitions[symbol] = (originalInputRow.displayTransitions[symbol] || [])
              .map(ds => ({ state: ds.state, status: StateStatus.incorrect }));
        });
        // Füge diese falsche Zeile *am Ende* des Ergebnis-Arrays hinzu
        comparisonResult.push(incorrectRow);
      }
    });

    // 4. Weise das finale Ergebnis der `tableData` zu. Die Reihenfolge ist nun:
    //    - Korrekte/Partielle Zeilen in Lösungsreihenfolge
    //    - Fehlende Zeilen in Lösungsreihenfolge (wo sie hingehören)
    //    - Falsche Benutzereingaben am Ende
    this.tableData = comparisonResult;
    // KEINE explizite Sortierung mehr hier!
  }

  /**
   * Vergleicht Zustände und Marker einer Zelle (SDFA-Spalte) zwischen Eingabe und Lösung.
   * @returns Ein Objekt mit `DisplayState[]` und `DisplayMarker[]`, die den Status ('correct', 'incorrect', 'missing') enthalten.
   */
  private compareStatesAndMarkers(
      inputStates: EndlicherState[],
      inputMarkerIds: string[],
      solutionStates: EndlicherState[],
      solutionMarkerIds: string[]
  ): { states: DisplayState[], markers: DisplayMarker[] } {
    const resultStates: DisplayState[] = [];
    const solutionStateMap = new Map(solutionStates.map(s => [s.id, s]));
    const inputStateIdSet = new Set(inputStates.map(s => s.id));

    // 1. Prüfe Lösungszustände
    solutionStates.forEach(solutionState => {
      if (inputStateIdSet.has(solutionState.id)) {
        // Korrekt: Zustand ist in Lösung UND Eingabe
        resultStates.push({ state: solutionState, status: StateStatus.correct });
      } else {
        // Fehlend: Zustand ist in Lösung, ABER NICHT in Eingabe
        resultStates.push({ state: solutionState, status: StateStatus.missing });
      }
    });

    // 2. Prüfe Eingabezustände (nur um Falsche zu finden)
    inputStates.forEach(inputState => {
      if (!solutionStateMap.has(inputState.id)) {
        // Falsch: Zustand ist in Eingabe, ABER NICHT in Lösung
        resultStates.push({ state: inputState, status: StateStatus.incorrect });
      }
      // Korrekte wurden in Schritt 1 behandelt
    });

    // ----- Marker -----
    const resultMarkers: DisplayMarker[] = [];
    const solutionMarkerSet = new Set(solutionMarkerIds);
    const inputMarkerSet = new Set(inputMarkerIds);

    // 1. Prüfe Lösungsmarker
    solutionMarkerIds.forEach(solutionMarkerId => {
      const markerDef = this.markers.find(m => m.id === solutionMarkerId);
      if (!markerDef) return; // Sollte nicht passieren
      if (inputMarkerSet.has(solutionMarkerId)) {
        // Korrekt
        resultMarkers.push({ ...markerDef, status: StateStatus.correct });
      } else {
        // Fehlend
        resultMarkers.push({ ...markerDef, status: StateStatus.missing });
      }
    });

    // 2. Prüfe Eingabemarker (nur um Falsche zu finden)
    inputMarkerIds.forEach(inputMarkerId => {
      const markerDef = this.markers.find(m => m.id === inputMarkerId);
      if (!markerDef) return;
      if (!solutionMarkerSet.has(inputMarkerId)) {
        // Falsch
        resultMarkers.push({ ...markerDef, status: StateStatus.incorrect });
      }
      // Korrekte wurden in Schritt 1 behandelt
    });

    // Sortiere Ergebnisse für konsistente Anzeige innerhalb der Zelle
    resultStates.sort((a, b) => (a.state.id ?? -1) - (b.state.id ?? -1));
    resultMarkers.sort((a, b) => a.label.localeCompare(b.label));

    return { states: resultStates, markers: resultMarkers };
  }

  /**
   * Vergleicht die Übergänge für alle Symbole zwischen einer Eingabezeile und einer Lösungszeile.
   * @returns Ein Objekt `{ [symbol: string]: DisplayState[] }` mit den verglichenen Zuständen für jeden Übergang.
   */
  private compareTransitions(
      inputTransitions: { [symbol: string]: DisplayState[] },
      solutionTransitions: { [symbol: string]: EndlicherState[] }
  ): { [symbol: string]: DisplayState[] } {
    const result: { [symbol: string]: DisplayState[] } = {};
    // Betrachte alle Symbole, die entweder in der Eingabe oder Lösung vorkommen
    const allSymbols = new Set([...this.symbols, ...Object.keys(solutionTransitions)]);

    allSymbols.forEach(symbol => {
      // Hole Zustände für dieses Symbol aus Eingabe und Lösung
      const inputDisplayStates = inputTransitions[symbol] || [];
      const inputStates = inputDisplayStates.map(ds => ds.state);
      const solutionStatesForSymbol = solutionTransitions[symbol] || [];

      // Nutze die gleiche Vergleichslogik wie für die SDFA-Zelle (ohne Marker)
      const { states: comparedStates } = this.compareStatesAndMarkers(
          inputStates, [], // Keine Marker hier
          solutionStatesForSymbol, [] // Keine Marker hier
      );
      result[symbol] = comparedStates; // Speichere das Ergebnis für dieses Symbol
    });

    return result;
  }

  // ----------- Hilfsfunktionen -----------

  /** Erzeugt einen eindeutigen, sortierten Key aus einer Liste von Zuständen. */
  private getStateSetKey(states: EndlicherState[]): string {
    if (!states || states.length === 0) return '∅';
    // Sonderfall: Nur der leere Zustand
    const hasOnlyEmpty = states.length === 1 && states[0]?.id === this.emptyState.id;
    if (hasOnlyEmpty) return '∅';
    // Filtere undefinierte Zustände und den leeren Zustand, sortiere IDs numerisch
    const validStates = states.filter(s => s && typeof s.id !== 'undefined' && s.id !== this.emptyState.id);
    if (validStates.length === 0) return '∅'; // Wenn nur ∅ oder ungültige drin waren
    return validStates.map(s => s.id).sort((a, b) => (a as number) - (b as number)).join(',');
  }

  /** Erzeugt einen Key aus einer Liste von DisplayState-Objekten. */
  private getStateSetKeyFromDisplay(displayStates: DisplayState[]): string {
    if (!displayStates) return '∅';
    return this.getStateSetKey(displayStates.map(ds => ds.state));
  }

  /** Ermittelt die nächste freie ID für eine neue Tabellenzeile. */
  private getNextRowId(currentData: TableRow[]): number {
    if (!currentData || currentData.length === 0) return 1; // Starte bei 1, wenn leer
    // Finde die höchste existierende ID und addiere 1
    return currentData.reduce((max, row) => Math.max(max, row.id), 0) + 1;
  }

  /** Erzeugt ein leeres Übergangsobjekt für die aktuellen Symbole (für DisplayStates). */
  private getDefaultDisplayTransitions(): { [symbol: string]: DisplayState[] } {
    return Object.fromEntries(this.symbols.map(symbol => [symbol, []]));
  }

  /** Erzeugt ein leeres Übergangsobjekt für die aktuellen Symbole (für EndlicherState). */
  private getDefaultTransitions(): { [symbol: string]: EndlicherState[] } {
    return Object.fromEntries(this.symbols.map(symbol => [symbol, []]));
  }

  // ----------- UI Interaktionen (Editier-Modus) -----------

  /** Wählt eine Zelle für die Bearbeitung aus. */
  selectCell(rowId: number, type: string): void {
    if (this.isCheckMode) return; // Keine Auswahl im Check-Modus
    this.activeCell = rowId;
    this.activeCellType = type;
  }

  /** Fügt einen Zustand aus der Palette zur aktuell ausgewählten Zelle hinzu. */
  addStateToCell(state: EndlicherState): void {
    if (this.isCheckMode || !this.activeCell || !this.activeCellType) return; // Nur im Editier-Modus mit aktiver Zelle

    const rowIndex = this.tableData.findIndex(row => row.id === this.activeCell);
    if (rowIndex === -1) return; // Zeile nicht gefunden
    const row = this.tableData[rowIndex];
    const isLastRow = rowIndex === this.tableData.length - 1; // Ist es die letzte Zeile?

    if (this.activeCellType === 'state') {
      // --- SDFA-Spalte (linke Spalte) ---
      const existingIndex = row.displayStates.findIndex(ds => ds.state.id === state.id);
      // Füge nur hinzu, wenn noch nicht vorhanden
      if (existingIndex === -1) {
        row.displayStates.push({ state: state, status: StateStatus.original });
        // Sortiere Zustände nach ID für konsistente Anzeige
        row.displayStates.sort((a, b) => (a.state.id ?? -1) - (b.state.id ?? -1));
      }
      // Kein Hinzufügen von Zeilen hier
    } else {
      // --- Transitions-Spalte (Übergänge) ---
      const symbol = this.activeCellType as string;
      // Initialisiere Array, falls für dieses Symbol noch kein Eintrag existiert
      if (!row.displayTransitions[symbol]) row.displayTransitions[symbol] = [];
      const transitionStates = row.displayTransitions[symbol];
      const existingIndex = transitionStates.findIndex(ds => ds.state.id === state.id);
      // Füge nur hinzu, wenn noch nicht vorhanden
      if (existingIndex === -1) {
        transitionStates.push({ state: state, status: StateStatus.original });
        // Sortiere Zustände nach ID
        transitionStates.sort((a, b) => (a.state.id ?? -1) - (b.state.id ?? -1));

        // *** NEU: Prüfe, ob eine neue Zeile hinzugefügt werden muss ***
        //         Dies passiert nur, wenn es die letzte Zeile war.
        if (isLastRow) {
          this.checkAndAddEmptyRowIfNeeded();
        }
      }
    }
    this.cdRef.detectChanges(); // Sicherstellen, dass die UI aktualisiert wird
  }

  /** Entfernt einen Zustand aus der SDFA-Spalte (linke Spalte). */
  removeStateFromCell(rowId: number, displayStateToRemove: DisplayState): void {
    if (this.isCheckMode) return; // Nur im Editier-Modus
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    // Filtere den zu entfernenden Zustand heraus
    this.tableData[rowIndex].displayStates = this.tableData[rowIndex].displayStates.filter(
        ds => ds.state.id !== displayStateToRemove.state.id
    );
    // Prüfe danach, ob diese Zeile jetzt leer ist und entfernt werden kann
    this.adjustEmptyRows();
  }

  removeMarkerFromCell(rowId: number, displayMarkerToRemove: DisplayMarker): void {
    if (this.isCheckMode) return;
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    this.tableData[rowIndex].displayMarkers = this.tableData[rowIndex].displayMarkers.filter(
        ds => ds.id !== displayMarkerToRemove.id
    );
  }

  /** Entfernt einen Zustand aus einer Übergangszelle. */
  removeTransitionState(rowId: number, symbol: string, displayStateToRemove: DisplayState): void {
    if (this.isCheckMode) return; // Nur im Editier-Modus
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;

    // Prüfe, ob der Übergang für das Symbol existiert
    if (this.tableData[rowIndex].displayTransitions[symbol]) {
      // Filtere den zu entfernenden Zustand heraus
      this.tableData[rowIndex].displayTransitions[symbol] =
          this.tableData[rowIndex].displayTransitions[symbol].filter(
              ds => ds.state.id !== displayStateToRemove.state.id
          );
      // Prüfe danach, ob die *gesamte Zeile* jetzt leer ist und entfernt werden kann
      // (adjustEmptyRows prüft nur States und Marker, was hier ausreicht)
      this.adjustEmptyRows();
    }
  }

  /** Fügt einen Marker zur SDFA-Spalte hinzu oder entfernt ihn. */
  toggleMarker(rowId: number, markerId: string): void {
    // Nur im Editier-Modus, wenn die SDFA-Zelle aktiv ist
    if (this.isCheckMode || this.activeCellType !== 'state' || this.activeCell !== rowId) return;

    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    if (rowIndex === -1) return;
    const row = this.tableData[rowIndex];
    const markerDef = this.markers.find(m => m.id === markerId);
    if (!markerDef) return; // Unbekannter Marker

    const existingIndex = row.displayMarkers.findIndex(dm => dm.id === markerId);
    if (existingIndex > -1) {
      // Marker entfernen
      row.displayMarkers.splice(existingIndex, 1);
    } else {
      // Marker hinzufügen
      row.displayMarkers.push({ ...markerDef, status: StateStatus.original });
      // Sortiere Marker (z.B. alphabetisch nach Label)
      row.displayMarkers.sort((a, b) => a.label.localeCompare(b.label));
    }
    // Prüfe, ob die Zeile jetzt leer ist und entfernt werden kann
    this.adjustEmptyRows();
  }

  // ----------- Zeilenmanagement (Editier-Modus) -----------

  /**
   * Prüft, ob die letzte Zeile in allen Übergangsspalten mindestens einen Zustand enthält.
   * Wenn ja, wird eine neue leere Zeile am Ende hinzugefügt.
   */
  private checkAndAddEmptyRowIfNeeded(): void {
    if (this.isCheckMode || this.tableData.length === 0) return; // Nur im Editier-Modus

    const lastRow = this.tableData[this.tableData.length - 1];
    const currentSymbols = this.symbols; // Aktuelle Symbole holen

    // Wenn es keine Symbole gibt, kann die Zeile nicht "voll" sein
    if (currentSymbols.length === 0 && lastRow.displayStates.length === 0 && lastRow.displayMarkers.length === 0) {
      // Spezialfall: Keine Symbole, aber die erste Zeile ist auch sonst leer -> keine neue Zeile
      return;
    }
    if (currentSymbols.length === 0 && (lastRow.displayStates.length > 0 || lastRow.displayMarkers.length > 0)) {
      // Spezialfall: Keine Symbole, aber SDFA-Zelle gefüllt -> neue Zeile hinzufügen
      console.log("Keine Symbole, aber SDFA gefüllt. Füge neue leere Zeile hinzu.");
      // (Weiter mit Code unten)
    } else {
      // Normalfall: Prüfe alle Symbolspalten
      let isLastRowFull = true;
      for (const symbol of currentSymbols) {
        // Eine Zelle gilt als "nicht gefüllt", wenn sie nicht existiert ODER leer ist
        if (!lastRow.displayTransitions[symbol] || lastRow.displayTransitions[symbol].length === 0) {
          isLastRowFull = false;
          break; // Sobald eine leere Übergangszelle gefunden wird, ist die Zeile nicht voll
        }
      }
      if (!isLastRowFull) return; // Nicht voll -> keine neue Zeile
    }


    // Wenn wir hier ankommen, ist die letzte Zeile voll (oder es gibt keine Symbole, aber SDFA ist gefüllt)
    console.log("Letzte Zeile gilt als voll, füge neue leere Zeile hinzu.");
    this.tableData.push({
      id: this.getNextRowId(this.tableData), // Neue ID
      rowStatus: 'original',
      displayStates: [],
      displayMarkers: [],
      displayTransitions: this.getDefaultDisplayTransitions(), // Leere Übergänge für aktuelle Symbole
    });
    this.cdRef.detectChanges(); // UI aktualisieren
  }

  /**
   * Entfernt alle Zeilen (außer der ersten, falls sie die einzige ist),
   * die komplett leer sind (keine Zustände UND keine Marker enthalten).
   */
  private adjustEmptyRows(): void {
    if (this.isCheckMode) return; // Nur im Editier-Modus

    // Filtert alle Zeilen heraus, die *entweder* Inhalt haben *oder* die erste Zeile sind
    const rowsToKeep = this.tableData.filter((row, index) => {
      const isEmpty = row.displayStates.length === 0 && row.displayMarkers.length === 0;
      // Behalte Zeile, wenn sie NICHT leer ist ODER wenn es die (potenziell leere) erste Zeile ist
      return !isEmpty || index === 0;
    });

    // Nur wenn sich die Anzahl der Zeilen tatsächlich geändert hat, das Array neu zuweisen
    if (rowsToKeep.length !== this.tableData.length) {
      console.log(`Entferne ${this.tableData.length - rowsToKeep.length} leere Zeile(n).`);
      this.tableData = rowsToKeep;
      this.cdRef.detectChanges(); // UI aktualisieren
    }

    // Sicherheitsnetz: Falls nach dem Filtern gar nichts mehr übrig ist (sollte nicht passieren)
    if (this.tableData.length === 0) {
      console.warn("Nach adjustEmptyRows war tableData leer. Initialisiere neu.");
      this.initializeEmptyTable();
    }
  }

  // ----------- Sonstige Methoden -----------

  /**
   * Behandelt Klicks auf den Reset/Weiter-Button.
   * Im Check-Modus: Verlässt den Check-Modus (`exitCheckMode`).
   * Im Editier-Modus: Setzt die Tabelle zurück (`initializeEmptyTable`).
   */
  resetTable(): void {
    if (this.isCheckMode) {
      this.exitCheckMode();
    } else {
      this.initializeEmptyTable();
    }
  }

  /** Behandelt Tastaturnavigation mit Pfeiltasten im Editier-Modus. */
  handleKeyDown(event: KeyboardEvent, rowId: number, type: string): void {
    if (this.isCheckMode) return; // Keine Navigation im Check-Modus

    // Wähle Zelle aus, falls nicht schon aktiv
    if (this.activeCell !== rowId || this.activeCellType !== type) {
      this.selectCell(rowId, type);
    }

    // Finde aktuelle Zeilen- und Spaltenindizes
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    const currentSymbols = this.symbols; // Wichtig: aktuelle Symbole verwenden
    let colIndex = type === 'state' ? 0 : currentSymbols.indexOf(type) + 1;

    // Abbruch, wenn Indizes ungültig
    if (rowIndex === -1 || colIndex < 0) return;

    let newRowIndex = rowIndex;
    let newColIndex = colIndex;
    let moved = false; // Flag, ob eine Bewegung stattgefunden hat

    // Berechne neue Indizes basierend auf Pfeiltaste
    switch (event.key) {
      case 'ArrowUp':   newRowIndex = Math.max(0, rowIndex - 1); moved = true; break;
      case 'ArrowDown': newRowIndex = Math.min(this.tableData.length - 1, rowIndex + 1); moved = true; break;
      case 'ArrowLeft': newColIndex = Math.max(0, colIndex - 1); moved = true; break;
      case 'ArrowRight':newColIndex = Math.min(currentSymbols.length, colIndex + 1); moved = true; break; // Max Index ist Anzahl Symbole (da Index 0 = 'state')
    }

    // Wenn eine Bewegung stattgefunden hat
    if (moved) {
      event.preventDefault(); // Verhindere Standardverhalten (z.B. Scrollen)
      const newRow = this.tableData[newRowIndex];
      if (!newRow) return; // Sollte nicht passieren

      // Bestimme den Typ der neuen Zelle ('state' oder Symbol)
      const newType = newColIndex === 0 ? 'state' : currentSymbols[newColIndex - 1];

      // Wähle die neue Zelle aus (setzt activeCell/activeCellType)
      this.selectCell(newRow.id, newType);

      // Setze den Fokus auf das neue TD-Element (mit Timeout)
      setTimeout(() => {
        const tableRows = Array.from(document.querySelectorAll('tbody tr'));
        if (tableRows[newRowIndex]) {
          const cells = Array.from(tableRows[newRowIndex].querySelectorAll('td'));
          const targetCell = cells[newColIndex] as HTMLElement;
          if (targetCell) targetCell.focus(); // Setze Fokus
        }
      }, 0);
    }
  }

  // ----------- TrackBy Funktionen (Performance für *ngFor) -----------
  trackRowById(index: number, row: TableRow): number { return row.id; }
  trackSymbol(index: number, symbol: string): string { return symbol; }
  trackDisplayState(index: number, ds: DisplayState): string { return `${ds.state.id}-${ds.status}`; } // Kombinierter Key für bessere Performance
  trackDisplayMarker(index: number, dm: DisplayMarker): string { return `${dm.id}-${dm.status}`; } // Kombinierter Key
}