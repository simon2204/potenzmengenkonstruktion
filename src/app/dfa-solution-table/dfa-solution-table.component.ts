import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndlicherAutomat } from '../endlicherautomat/EndlicherAutomat';
import { EndlicherState } from '../endlicherautomat/EndlicherState';
import { Point } from '../../../statemachine/src/lib/statemachine/drawingprimitives/Point';
import { StateBlockComponent } from "../inputTable/state-block/state-block.component";

// Interface für die Struktur einer Tabellenzeile
interface TableRow {
  id: number;
  states: EndlicherState[];
  markers: string[];
  transitions: { [symbol: string]: EndlicherState[] };
}

// Interface für Marker-Definitionen
interface MarkerItem {
  id: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-dfa-solution-table',
  templateUrl: './dfa-solution-table.component.html',
  styleUrls: ['./dfa-solution-table.component.scss'],
  standalone: true,
  imports: [ CommonModule, StateBlockComponent ]
})
export class DfaSolutionTableComponent implements OnChanges {

  @Input() automat: EndlicherAutomat | null = null;

  solutionTableData: TableRow[] | null = null;
  isLoading: boolean = false;
  errorMsg: string | null = null;

  private readonly emptyState: EndlicherState;
  private nfaStateMap = new Map<number | string, EndlicherState>();
  private readonly markers: MarkerItem[] = [
    { id: '(A)', label: 'A', color: '#f59e0b' },
    { id: '(E)', label: 'E', color: '#ef4444' }
  ];

  constructor() {
    const empty = new EndlicherState(Point.zero, -1);
    empty.name = "∅";
    this.emptyState = empty;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['automat']) {
      this.regenerateTable();
    }
  }

  // Trigger regeneration (public for button click)
  regenerateTable(): void { // Made public
    this.isLoading = true;
    this.solutionTableData = null;
    this.errorMsg = null;

    setTimeout(() => {
      if (this.automat) {
        try {
          this.buildNfaStateMap();
          this.solutionTableData = this.generateSolutionTableDataInternal();
          if (!this.solutionTableData || this.solutionTableData.length === 0) {
            this.errorMsg = "Keine Zustände im resultierenden DFA gefunden oder Startzustand problematisch.";
          }
        } catch (error: any) {
          console.error("Fehler bei Generierung der DFA-Lösungstabelle:", error);
          this.errorMsg = `Fehler beim Generieren der Tabelle: ${error.message || error}`;
          this.solutionTableData = null;
        }
      } else {
        this.errorMsg = "Kein Automat für die Generierung vorhanden.";
        this.solutionTableData = null;
      }
      this.isLoading = false;
    });
  }

  private buildNfaStateMap(): void {
    this.nfaStateMap.clear();
    if (this.automat && this.automat.getAllStates()) {
      this.nfaStateMap.set(this.emptyState.id, this.emptyState);
      this.automat.getAllStates().forEach(state => {
        if (state && typeof state.id !== 'undefined') {
          this.nfaStateMap.set(state.id, state as EndlicherState);
        }
      });
    }
  }

  // --- Kernlogik: Potenzmengenkonstruktion ---
  private generateSolutionTableDataInternal(): TableRow[] | null {
    const nfa = this.automat;
    if (!nfa || !nfa.startState || !(nfa.startState instanceof EndlicherState)) {
      console.error("DFA Solution Table: NFA, Startzustand nicht gefunden oder ungültig.");
      return null;
    }
    if (this.nfaStateMap.size <= 1 && nfa.getAllStates().length > 0) {
      console.warn("DFA Solution Table: NFA state map scheint unvollständig.");
    }

    const solutionData: TableRow[] = []; // Das Ergebnis-Array wird in Verarbeitungsreihenfolge gefüllt
    let rowIdCounter = 1; // Für eindeutige IDs in der Reihenfolge der Verarbeitung

    // Map zur Verfolgung der DFA-Zustandsmengen (bereits entdeckt)
    const dfaStateSets = new Map<string, Set<EndlicherState>>();
    // Warteschlange (FIFO) für noch zu verarbeitende NFA-Zustandsmengen
    const unprocessedSets: Set<EndlicherState>[] = [];
    // Set zur Verfolgung bereits zur Warteschlange hinzugefügter Schlüssel
    const unprocessedKeys = new Set<string>();

    // 1. Startzustand des DFA bestimmen
    const startNfaStates = new Set([nfa.startState as EndlicherState]);
    const startStateClosureSet = new Set(EndlicherState.eClosure2(startNfaStates));
    const startStateKey = this.getStateSetKey(startStateClosureSet);

    // Nur fortfahren, wenn der Startzustand nicht selbst die leere Menge ist
    if (startStateKey !== '∅') {
      dfaStateSets.set(startStateKey, startStateClosureSet);
      unprocessedSets.push(startStateClosureSet); // Startzustand in die Warteschlange
      unprocessedKeys.add(startStateKey);
    } else {
      // Sonderfall: Selbst die ε-Hülle des Startzustands ist leer.
      console.warn("DFA Solution Table: Startzustand ε-Hülle ist leer.");
      const emptyRow: TableRow = {
        id: rowIdCounter++, // ID 1
        states: [this.emptyState],
        markers: [],
        transitions: {}
      };
      const alphabet = this.symbols;
      for (const symbol of alphabet) {
        emptyRow.transitions[symbol] = [this.emptyState];
      }
      solutionData.push(emptyRow);
      return solutionData; // Nur die leere Menge zurückgeben
    }

    const alphabet = this.symbols;

    // 2. Zustände iterativ verarbeiten, solange die Warteschlange nicht leer ist
    while (unprocessedSets.length > 0) {
      // Nächste Zustandsmenge aus der Warteschlange holen (FIFO)
      const currentNfaStatesSet = unprocessedSets.shift()!; // shift() für FIFO
      const currentStateKey = this.getStateSetKey(currentNfaStatesSet);

      // TableRow-Objekt für diesen *gerade verarbeiteten* DFA-Zustand erstellen
      const currentRow: TableRow = {
        id: rowIdCounter++, // ID in Verarbeitungsreihenfolge zuweisen
        states: this.getStatesFromSet(currentNfaStatesSet),
        markers: [],
        transitions: {}
      };

      // 3. Marker bestimmen
      if (currentStateKey === startStateKey) {
        currentRow.markers.push('(A)');
      }
      let isFinal = false;
      for (const nfaState of currentNfaStatesSet) {
        if (nfa.finalStates.has(nfaState)) {
          isFinal = true;
          break;
        }
      }
      if (isFinal) {
        currentRow.markers.push('(E)');
      }
      currentRow.markers.sort();

      // 4. Übergänge für jedes Symbol im Alphabet berechnen
      for (const symbol of alphabet) {
        const movedStates = EndlicherState.move2(Array.from(currentNfaStatesSet), symbol);
        const nextNfaStateClosureSet = new Set(EndlicherState.eClosure2(new Set(movedStates)));
        const nextStateKey = this.getStateSetKey(nextNfaStateClosureSet);

        // Übergangsziel in der aktuellen Zeile speichern
        currentRow.transitions[symbol] = this.getStatesFromSet(nextNfaStateClosureSet);

        // 5. Neue Zustände zur Warteschlange hinzufügen, *falls sie wirklich neu sind*
        if (!dfaStateSets.has(nextStateKey) && !unprocessedKeys.has(nextStateKey)) {
          dfaStateSets.set(nextStateKey, nextNfaStateClosureSet);
          unprocessedSets.push(nextNfaStateClosureSet); // Füge *neue* Zustände hinten an die Schlange an
          unprocessedKeys.add(nextStateKey);
        }
      }

      // WICHTIG: Füge die *gerade verarbeitete* Zeile zum Ergebnis hinzu.
      // Die Reihenfolge in solutionData entspricht der Verarbeitungsreihenfolge.
      solutionData.push(currentRow);
    }
    return solutionData;
  }

  // --- Hilfsfunktionen ---
  private getStateSetKey(stateSet: Set<EndlicherState>): string {
    if (!stateSet || stateSet.size === 0) return '∅';
    return Array.from(stateSet)
        .map(s => s.id ?? 'undef')
        .sort((a, b) => (a - b))
        .join(',');
  }

  private getStatesFromSet(stateSet: Set<EndlicherState>): EndlicherState[] {
    if (!stateSet || stateSet.size === 0) return [this.emptyState];
    return Array.from(stateSet)
        .sort((a, b) => {
          const idA = a.id ?? -Infinity;
          const idB = b.id ?? -Infinity;
          return idA - idB;
        });
  }

  // --- Getter für das Template ---
  get symbols(): string[] {
    const automat = this.automat;
    if (!automat) return [];
    const uniqueSymbols: Set<string> = new Set();
    for (const state of automat.getAllStates() as EndlicherState[]) {
      if (state.transitions) {
        for (const transition of state.transitions) {
          if (transition.transitionSymbols) {
            transition.transitionSymbols.forEach(symbol => {
              if (symbol !== EndlicherAutomat.epsilon) {
                uniqueSymbols.add(symbol);
              }
            });
          }
        }
      }
    }
    return Array.from(uniqueSymbols).sort(); // Alphabet sortieren ist ok für Spaltenreihenfolge
  }

  // --- UI Farb-Hilfsfunktionen ---
  getStateColor(stateId: number | string): string {
    if (stateId === this.emptyState.id) return '#aaaaaa';
    const state = this.nfaStateMap.get(stateId);
    if (!state) return '#000000';
    const realNfaStates = Array.from(this.nfaStateMap.values())
        .filter(s => s.id !== this.emptyState.id)
        .sort((a, b) => (a.id < b.id ? -1 : 1));
    const total = realNfaStates.length;
    if (total === 0) return '#222222';
    const stateIndex = realNfaStates.findIndex(s => s.id === stateId);
    if (stateIndex === -1) return '#444444';
    const hue = Math.floor((360 / total) * stateIndex);
    return this.hslToHex(hue, 80, 45);
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

  // --- TrackBy Funktionen ---
  trackRowById(index: number, row: TableRow): number { return row.id; }
  trackSymbol(index: number, symbol: string): string { return symbol; }
  trackStateById(index: number, state: EndlicherState): number | string { return state.id ?? index; }
  trackMarkerId(index: number, markerId: string): string { return markerId; }
}