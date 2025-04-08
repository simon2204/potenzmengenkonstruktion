import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndlicherAutomat } from '../endlicherautomat/EndlicherAutomat';
import { EndlicherState } from '../endlicherautomat/EndlicherState';
import { Point } from '../../../statemachine/src/lib/statemachine/drawingprimitives/Point';
// Assuming StateBlockComponent is standalone and can be imported
import { StateBlockComponent } from "../inputTable/state-block/state-block.component";

// Define the TableRow interface locally or import if shared
interface TableRow {
  id: number;
  states: EndlicherState[];
  markers: string[];
  transitions: { [symbol: string]: EndlicherState[] };
}

// Define MarkerItem interface locally or import if shared
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
  imports: [
    CommonModule,         // For *ngIf, *ngFor
    StateBlockComponent   // To display state blocks
  ]
})
export class DfaSolutionTableComponent implements OnChanges {

  // Input property to receive the NFA instance
  @Input() automat: EndlicherAutomat | null = null;

  // Internal state to hold the generated table data
  solutionTableData: TableRow[] | null = null;
  isLoading: boolean = false;
  errorMsg: string | null = null;

  // Local definition of the empty state representation
  private readonly emptyState: EndlicherState;

  // Local map of NFA states from the input automaton
  private nfaStateMap = new Map<number | string, EndlicherState>();

  // Local definition of markers (could also be an input if needed)
  private readonly markers: MarkerItem[] = [
    { id: '(A)', label: 'A', color: '#f59e0b' },
    { id: '(E)', label: 'E', color: '#ef4444' }
  ];

  constructor() {
    // Initialize the local emptyState object
    const empty = new EndlicherState(Point.zero, -1); // Use distinct ID
    empty.name = "∅";
    this.emptyState = empty;
  }

  // Lifecycle hook to react to changes in the input 'automat'
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['automat']) {
      this.regenerateTable();
    }
  }

  // Main function to trigger table generation
  private regenerateTable(): void {
    this.isLoading = true;
    this.solutionTableData = null; // Clear previous data
    this.errorMsg = null;          // Clear previous error

    // Use setTimeout to allow UI update (show loading) before potentially long calculation
    setTimeout(() => {
      if (this.automat) {
        try {
          // Build the state map based on the current automaton
          this.buildNfaStateMap();
          // Generate the solution data
          this.solutionTableData = this.generateSolutionTableDataInternal();
          if (!this.solutionTableData || this.solutionTableData.length === 0) {
            this.errorMsg = "Keine Zustände im resultierenden DFA gefunden.";
          }
        } catch (error: any) {
          console.error("Error generating DFA solution table:", error);
          this.errorMsg = `Fehler beim Generieren der Tabelle: ${error.message || error}`;
          this.solutionTableData = null;
        }
      } else {
        this.errorMsg = "Kein Automat für die Generierung vorhanden.";
        this.solutionTableData = null;
      }
      this.isLoading = false; // Hide loading indicator
    });

  }

  // Populates the local nfaStateMap from the input automaton
  private buildNfaStateMap(): void {
    this.nfaStateMap.clear();
    if (this.automat && this.automat.getAllStates()) {
      // Add the special empty state
      this.nfaStateMap.set(this.emptyState.id, this.emptyState);
      // Add all states from the input NFA
      this.automat.getAllStates().forEach(state => {
        if (state && typeof state.id !== 'undefined') {
          this.nfaStateMap.set(state.id, state as EndlicherState);
        }
      });
    }
  }

  // --- Core Solution Generation Logic (Internal) ---
  // (This is largely the same as the logic previously added to InputTableComponent)
  private generateSolutionTableDataInternal(): TableRow[] | null {
    const nfa = this.automat; // Use the input property
    if (!nfa || !nfa.startState || !(nfa.startState instanceof EndlicherState)) {
      // Error handled in regenerateTable, but return null here
      return null;
    }
    // Ensure map is built (should be called before this)
    if (this.nfaStateMap.size <= 1 && nfa.getAllStates().length > 0) {
      console.warn("DFA Solution Table: NFA state map seems incomplete.");
    }


    const solutionData: TableRow[] = [];
    let rowIdCounter = 1;
    const dfaStateSets = new Map<string, Set<EndlicherState>>();
    const unprocessedSets: Set<EndlicherState>[] = [];
    const unprocessedKeys = new Set<string>();

    // 1. Start State
    const startNfaStates = new Set([nfa.startState as EndlicherState]);
    const startStateClosureSet = new Set(EndlicherState.eClosure2(startNfaStates));
    const startStateKey = this.getStateSetKey(startStateClosureSet);

    if (startStateKey !== '∅') { // Only proceed if start state closure is not empty
      dfaStateSets.set(startStateKey, startStateClosureSet);
      unprocessedSets.push(startStateClosureSet);
      unprocessedKeys.add(startStateKey);
    } else {
      // Handle case where even the start state closure is empty
      const emptyRow: TableRow = {
        id: rowIdCounter++,
        states: [this.emptyState],
        markers: [], // Empty state cannot be start or final? Check definition. Add if needed.
        transitions: {}
      };
      const alphabet = this.symbols;
      for (const symbol of alphabet) {
        emptyRow.transitions[symbol] = [this.emptyState]; // Empty transitions to empty
      }
      solutionData.push(emptyRow);
      return solutionData; // Return table with only empty set if start is empty
    }


    const alphabet = this.symbols;

    // 2. Process States
    while (unprocessedSets.length > 0) {
      const currentNfaStatesSet = unprocessedSets.shift()!;
      const currentStateKey = this.getStateSetKey(currentNfaStatesSet);

      const currentRow: TableRow = {
        id: rowIdCounter++,
        states: this.getStatesFromSet(currentNfaStatesSet),
        markers: [],
        transitions: {}
      };

      // 3. Markers
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

      // 4. Transitions
      for (const symbol of alphabet) {
        const movedStates = EndlicherState.move2(Array.from(currentNfaStatesSet), symbol);
        const nextNfaStateClosureSet = new Set(EndlicherState.eClosure2(new Set(movedStates)));
        const nextStateKey = this.getStateSetKey(nextNfaStateClosureSet);

        currentRow.transitions[symbol] = this.getStatesFromSet(nextNfaStateClosureSet);

        // 5. Queue New States
        if (!dfaStateSets.has(nextStateKey) && !unprocessedKeys.has(nextStateKey)) {
          dfaStateSets.set(nextStateKey, nextNfaStateClosureSet);
          unprocessedSets.push(nextNfaStateClosureSet);
          unprocessedKeys.add(nextStateKey);
        }
      }
      solutionData.push(currentRow);
    }

    // 6. Sort and Finalize
    solutionData.sort((a, b) => {
      const nameA = this.combineStateNames(a.states);
      const nameB = this.combineStateNames(b.states);
      if (nameA === '∅') return -1;
      if (nameB === '∅') return 1;
      return nameA.localeCompare(nameB);
    });
    solutionData.forEach((row, index) => row.id = index + 1);

    return solutionData;
  }

  // --- Helper Functions (Copied/Adapted) ---

  private getStateSetKey(stateSet: Set<EndlicherState>): string {
    if (!stateSet || stateSet.size === 0) return '∅';
    return Array.from(stateSet)
        .map(s => s.id ?? 'undef')
        .sort((a, b) => (typeof a === 'number' && typeof b === 'number' ? a - b : String(a).localeCompare(String(b))))
        .join(',');
  }

  private getStatesFromSet(stateSet: Set<EndlicherState>): EndlicherState[] {
    if (!stateSet || stateSet.size === 0) return [this.emptyState];
    return Array.from(stateSet)
        .sort((a, b) => {
          const idA = a.id ?? -Infinity;
          const idB = b.id ?? -Infinity;
          if (typeof idA === 'number' && typeof idB === 'number') return idA - idB;
          return String(idA).localeCompare(String(idB));
        });
  }

  private combineStateNames(states: EndlicherState[]): string {
    if (states.length === 1 && states[0] === this.emptyState) return this.emptyState.name;
    return states.map(s => s.name || `ID(${s.id})`).sort().join(',');
  }

  // --- Getters for Template ---

  // Provides the alphabet symbols derived from the input automaton
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
    return Array.from(uniqueSymbols).sort();
  }

  // Provides the ID of the local empty state for template checks
  get emptyStateId(): number | string {
    return this.emptyState.id;
  }

  // --- UI Color Helpers ---

  getStateColor(stateId: number | string): string {
    if (stateId === this.emptyState.id) return '#aaaaaa'; // Consistent grey

    // Use the local map built from the input automat
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

  // --- TrackBy Functions for *ngFor ---
  trackRowById(index: number, row: TableRow): number { return row.id; }
  trackSymbol(index: number, symbol: string): string { return symbol; }
  trackStateById(index: number, state: EndlicherState): number | string { return state.id ?? index; }
  trackMarkerId(index: number, markerId: string): string { return markerId; }

}