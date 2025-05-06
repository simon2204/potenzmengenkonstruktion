// src/app/services/dfa-generator.service.ts
import { Injectable } from '@angular/core';
import { EndlicherAutomat } from '../endlicherautomat/EndlicherAutomat';
import { EndlicherState } from '../endlicherautomat/EndlicherState';
import { EndlicheTransition } from '../endlicherautomat/EndlicheTransition';
import { Point } from '../../../statemachine/src/lib/statemachine/drawingprimitives/Point';

// Interface für die Struktur einer Tabellenzeile (Lösung)
export interface SolutionTableRow {
  id: number; // Eindeutige ID für ngFor tracking
  states: EndlicherState[]; // Zustände dieser DFA-Zeile
  markers: string[]; // Marker wie '(A)', '(E)'
  transitions: { [symbol: string]: EndlicherState[] }; // Übergänge für jedes Symbol
}

// Interface für Marker-Definitionen (falls needed by service, though generation logic might hardcode them)
export interface MarkerItem {
  id: string; // z.B. '(A)'
  label: string; // z.B. 'A'
}

@Injectable({
  providedIn: 'root'
})
export class DfaGeneratorService {

  private emptyState!: EndlicherState;
  private nfaStateMap = new Map<number | string, EndlicherState>();

  constructor() {
    this.initializeEmptyState();
  }

  private initializeEmptyState(): void {
    const empty = new EndlicherState(Point.zero, -1); // ID -1 für leeren Zustand
    empty.name = "∅";
    this.emptyState = empty;
  }

  /**
   * Builds the internal map of NFA states.
   * Must be called before `generateSolutionTableInternal`.
   */
  private buildNfaStateMap(automat: EndlicherAutomat): void {
    this.nfaStateMap.clear();
    this.nfaStateMap.set(this.emptyState.id, this.emptyState);

    if (automat && automat.getAllStates()) {
      automat.getAllStates().forEach(state => {
        if (state && typeof state.id !== 'undefined') {
          this.nfaStateMap.set(state.id, state as EndlicherState);
        } else {
          console.warn("DFA Generator Service: Zustand ohne ID gefunden:", state);
        }
      });
    } else {
      console.warn("DFA Generator Service: buildNfaStateMap aufgerufen ohne Automat oder Zustände.");
    }
  }

  /**
   * Generates a unique string key for a set of states.
   * Sorts IDs numerically. Handles the empty state ('∅').
   * Public, so InputTableComponent can use it for consistent key generation.
   */
  public getStateSetKey(stateSet: Set<EndlicherState> | EndlicherState[]): string {
    const states = Array.isArray(stateSet) ? stateSet : Array.from(stateSet);

    if (!states || states.length === 0 || (states.length === 1 && states[0]?.id === this.emptyState.id)) {
      return '∅';
    }

    const validStates = states.filter(s => s && typeof s.id !== 'undefined' && s.id !== this.emptyState.id);

    if (validStates.length === 0) {
      return '∅';
    }

    return validStates
        .map(s => s.id)
        .sort((a, b) => (a as number) - (b as number))
        .join(',');
  }

  /**
   * Converts a set of states into a sorted array of states.
   * Returns an array with only the empty state if the set is empty.
   */
  private getStatesFromSet(stateSet: Set<EndlicherState>): EndlicherState[] {
    if (!stateSet || stateSet.size === 0) {
      return [this.emptyState];
    }
    return Array.from(stateSet)
        .sort((a, b) => {
          const idA = a.id ?? -Infinity;
          const idB = b.id ?? -Infinity;
          return (idA as number) - (idB as number);
        });
  }

  /**
   * Gets the alphabet of the automaton (all unique transition symbols except Epsilon).
   * Public, so components can use it.
   */
  public getAlphabet(automat: EndlicherAutomat | null): string[] {
    if (!automat) return [];

    const uniqueSymbols: Set<string> = new Set();
    const allStates = automat.getAllStates() as EndlicherState[];

    if (allStates) {
      allStates.forEach(state => {
        if (state.transitions && Array.isArray(state.transitions)) {
          state.transitions.forEach(trans => {
            const transition = trans as EndlicheTransition;
            if (transition.transitionSymbols && Array.isArray(transition.transitionSymbols)) {
              transition.transitionSymbols.forEach(sym => {
                if (sym !== EndlicherAutomat.epsilon && typeof sym === 'string') {
                  uniqueSymbols.add(sym);
                }
              });
            }
          });
        }
      });
    }
    return Array.from(uniqueSymbols).sort();
  }

  /**
   * Core logic: Powerset construction.
   * Generates the solution table data for a given NFA.
   */
  public generateSolutionTable(nfa: EndlicherAutomat | null): SolutionTableRow[] {
    if (!nfa) {
      console.error("DFA Generator Service: Kein Automat (NFA) vorhanden.");
      throw new Error("Kein Automat (NFA) für die Generierung vorhanden.");
    }

    this.buildNfaStateMap(nfa); // Build/update the NFA state map

    if (this.nfaStateMap.size === 0 || (this.nfaStateMap.size === 1 && this.nfaStateMap.has(this.emptyState.id) && nfa.getAllStates().length > 0) ) {
      console.warn("DFA Generator Service: NFA State Map scheint leer oder unvollständig. Versuche erneuten Aufbau.");
      this.buildNfaStateMap(nfa);
      if (this.nfaStateMap.size === 0 || (this.nfaStateMap.size === 1 && this.nfaStateMap.has(this.emptyState.id) && nfa.getAllStates().length > 0)) {
        console.error("DFA Generator Service: NFA State Map konnte nicht korrekt aufgebaut werden.");
        throw new Error("Interner Fehler: NFA Zustands-Map konnte nicht erstellt werden.");
      }
    }
    if (!nfa.startState || !(nfa.startState instanceof EndlicherState)) {
      console.error("DFA Generator Service: NFA-Startzustand nicht gefunden oder ungültig.");
      throw new Error("NFA-Startzustand ist nicht definiert oder ungültig.");
    }

    const solutionData: SolutionTableRow[] = [];
    let rowIdCounter = 1;
    const dfaStateSets = new Map<string, Set<EndlicherState>>();
    const unprocessedSets: Set<EndlicherState>[] = [];
    const unprocessedKeys = new Set<string>();
    const alphabet = this.getAlphabet(nfa);

    const startNfaStates = new Set([nfa.startState as EndlicherState]);
    const startStateClosureSet = new Set(EndlicherState.eClosure2(startNfaStates));
    const startStateKey = this.getStateSetKey(startStateClosureSet);

    if (startStateKey !== '∅') {
      dfaStateSets.set(startStateKey, startStateClosureSet);
      unprocessedSets.push(startStateClosureSet);
      unprocessedKeys.add(startStateKey);
    } else {
      console.warn("DFA Generator Service: Startzustand ε-Hülle ist leer. Erzeuge nur ∅-Zustand.");
      const emptyRow: SolutionTableRow = {
        id: rowIdCounter++,
        states: [this.emptyState],
        markers: [],
        transitions: {}
      };
      for (const symbol of alphabet) {
        emptyRow.transitions[symbol] = [this.emptyState];
      }
      solutionData.push(emptyRow);
      return solutionData;
    }

    while (unprocessedSets.length > 0) {
      const currentNfaStatesSet = unprocessedSets.shift()!;
      const currentStateKey = this.getStateSetKey(currentNfaStatesSet);

      const currentRow: SolutionTableRow = {
        id: rowIdCounter++,
        states: this.getStatesFromSet(currentNfaStatesSet),
        markers: [],
        transitions: {}
      };

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

      for (const symbol of alphabet) {
        const movedStates = EndlicherState.move2(Array.from(currentNfaStatesSet), symbol);
        const nextNfaStateClosureSet = new Set(EndlicherState.eClosure2(new Set(movedStates)));
        const nextStateKey = this.getStateSetKey(nextNfaStateClosureSet);

        currentRow.transitions[symbol] = this.getStatesFromSet(nextNfaStateClosureSet);

        if (!dfaStateSets.has(nextStateKey) && !unprocessedKeys.has(nextStateKey)) {
          dfaStateSets.set(nextStateKey, nextNfaStateClosureSet);
          unprocessedSets.push(nextNfaStateClosureSet);
          unprocessedKeys.add(nextStateKey);
        }
      }
      solutionData.push(currentRow);
    }

    const emptyStateIsReferenced = solutionData.some(row =>
        Object.values(row.transitions).flat().some(s => s.id === this.emptyState.id)
    );
    const emptyStateRowExists = dfaStateSets.has('∅');

    if (emptyStateIsReferenced && !emptyStateRowExists) {
      console.warn("DFA Generator Service: Leerer Zustand (∅) wird referenziert, aber hat keine eigene Zeile. Füge sie hinzu.");
      const emptyRow: SolutionTableRow = {
        id: rowIdCounter++,
        states: [this.emptyState],
        markers: [],
        transitions: {}
      };
      for (const symbol of alphabet) {
        emptyRow.transitions[symbol] = [this.emptyState];
      }
      solutionData.push(emptyRow);
    }
    return solutionData;
  }
}