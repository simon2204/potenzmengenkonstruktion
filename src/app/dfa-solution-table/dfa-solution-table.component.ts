import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndlicherAutomat } from '../endlicherautomat/EndlicherAutomat';
import { EndlicherState } from '../endlicherautomat/EndlicherState';
import { EndlicheTransition } from '../endlicherautomat/EndlicheTransition'; // Import needed for symbol extraction
import { Point } from '../../../statemachine/src/lib/statemachine/drawingprimitives/Point';
import { StateBlockComponent } from "../inputTable/state-block/state-block.component"; // Import StateBlockComponent

// Interface für die Struktur einer Tabellenzeile (Lösung)
// Kann auch in eine separate Datei ausgelagert und importiert werden
export interface SolutionTableRow {
  id: number; // Eindeutige ID für ngFor tracking
  states: EndlicherState[]; // Zustände dieser DFA-Zeile
  markers: string[]; // Marker wie '(A)', '(E)'
  transitions: { [symbol: string]: EndlicherState[] }; // Übergänge für jedes Symbol
}

// Interface für Marker-Definitionen
// Kann auch in eine separate Datei ausgelagert und importiert werden
export interface MarkerItem {
  id: string; // z.B. '(A)'
  label: string; // z.B. 'A'
}


@Component({
  selector: 'app-dfa-solution-table',
  templateUrl: './dfa-solution-table.component.html',
  styleUrls: ['./dfa-solution-table.component.scss'],
  standalone: true,
  imports: [ CommonModule, StateBlockComponent ] // Stelle sicher, dass CommonModule und StateBlockComponent importiert sind
})
export class DfaSolutionTableComponent implements OnChanges {

  @Input() automat: EndlicherAutomat | null = null;

  // Daten für die Anzeige *dieser* Komponente
  solutionTableData: SolutionTableRow[] | null = null;
  isLoading: boolean = false;
  errorMsg: string | null = null;

  // Diese müssen public sein oder über public Methoden zugänglich,
  // damit InputTableComponent darauf zugreifen kann.
  public readonly emptyState: EndlicherState;
  public nfaStateMap = new Map<number | string, EndlicherState>(); // Map von NFA State ID -> NFA State Objekt
  public readonly markers: MarkerItem[] = [ // Konsistent mit InputTable halten
    { id: '(A)', label: 'A' }, // Startzustandsmarker
    { id: '(E)', label: 'E' }  // Endzustandsmarker
  ];

  constructor() {
    // Leerer Zustand initialisieren (gleiche ID wie in InputTable verwenden!)
    const empty = new EndlicherState(Point.zero, -1); // ID -1 für leeren Zustand
    empty.name = "∅";
    this.emptyState = empty;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Wenn sich der Input-Automat ändert, die Anzeige dieser Tabelle neu generieren
    if (changes['automat'] && this.automat) {
      this.triggerTableGenerationForDisplay();
    } else if (changes['automat'] && !this.automat) {
      // Wenn der Automat entfernt wird, Tabelle leeren
      this.solutionTableData = null;
      this.errorMsg = "Kein Automat vorhanden.";
      this.isLoading = false;
    }
  }

  // --- Öffentliche Methoden für InputTableComponent ---

  /**
   * Baut die interne Map der NFA-Zustände auf.
   * Muss vor `generateSolutionTableDataInternal` aufgerufen werden.
   * Ist public, damit InputTableComponent sie bei Bedarf aufrufen kann.
   */
  public buildNfaStateMap(): void {
    this.nfaStateMap.clear();
    // Wichtig: Den leeren Zustand immer hinzufügen
    this.nfaStateMap.set(this.emptyState.id, this.emptyState);

    if (this.automat && this.automat.getAllStates()) {
      this.automat.getAllStates().forEach(state => {
        if (state && typeof state.id !== 'undefined') {
          // Stelle sicher, dass es EndlicherState-Instanzen sind
          this.nfaStateMap.set(state.id, state as EndlicherState);
        } else {
          console.warn("DFA Solution Table: Zustand ohne ID gefunden:", state);
        }
      });
    } else {
      console.warn("DFA Solution Table: buildNfaStateMap aufgerufen ohne Automat oder Zustände.");
    }
  }

  /**
   * Kernlogik: Potenzmengenkonstruktion.
   * Diese Methode führt die Berechnung synchron durch und gibt das Ergebnis zurück oder wirft einen Fehler.
   * Ist public, damit InputTableComponent sie für den Vergleich nutzen kann.
   * Stellt sicher, dass buildNfaStateMap vorher aufgerufen wurde.
   */
  public generateSolutionTableDataInternal(): SolutionTableRow[] { // Gibt Array zurück, wirft Fehler bei Problemen
    // 1. Vorbedingungen prüfen
    const nfa = this.automat;
    if (!nfa) {
      console.error("DFA Solution Table Internal: Kein Automat (NFA) vorhanden.");
      throw new Error("Kein Automat (NFA) für die Generierung vorhanden.");
    }
    // buildNfaStateMap muss aufgerufen worden sein! Ggf. hier nochmal sicherstellen?
    // Normalerweise ruft InputTableComponent erst buildNfaStateMap und dann diese Methode auf.
    // Wir können hier einen Check einbauen:
    if (this.nfaStateMap.size === 0 || (this.nfaStateMap.size === 1 && this.nfaStateMap.has(this.emptyState.id) && nfa.getAllStates().length > 0) ) {
      console.warn("DFA Solution Table Internal: NFA State Map scheint leer oder unvollständig. Versuche erneuten Aufbau.");
      this.buildNfaStateMap(); // Versuch, die Map zu bauen
      if (this.nfaStateMap.size === 0 || (this.nfaStateMap.size === 1 && this.nfaStateMap.has(this.emptyState.id) && nfa.getAllStates().length > 0)) {
        console.error("DFA Solution Table Internal: NFA State Map konnte nicht korrekt aufgebaut werden.");
        throw new Error("Interner Fehler: NFA Zustands-Map konnte nicht erstellt werden.");
      }
    }
    if (!nfa.startState || !(nfa.startState instanceof EndlicherState)) {
      console.error("DFA Solution Table Internal: NFA-Startzustand nicht gefunden oder ungültig.");
      // Wenn kein Startzustand, kann keine Tabelle generiert werden.
      // Rückgabe einer leeren Tabelle oder Fehler? Fehler ist deutlicher.
      throw new Error("NFA-Startzustand ist nicht definiert oder ungültig.");
    }


    // 2. Initialisierung der Potenzmengenkonstruktion
    const solutionData: SolutionTableRow[] = []; // Das Ergebnis-Array
    let rowIdCounter = 1; // Für eindeutige IDs der Lösungszeilen

    // Map zur Verfolgung der DFA-Zustandsmengen (als String-Key -> Set<EndlicherState>)
    const dfaStateSets = new Map<string, Set<EndlicherState>>();
    // Warteschlange (FIFO) für noch zu verarbeitende NFA-Zustandsmengen (als Set<EndlicherState>)
    const unprocessedSets: Set<EndlicherState>[] = [];
    // Set zur Verfolgung der String-Keys der Mengen, die bereits zur Warteschlange hinzugefügt wurden (verhindert Doppelungen)
    const unprocessedKeys = new Set<string>();

    // 3. Startzustand des DFA bestimmen (ε-Hülle des NFA-Startzustands)
    const startNfaStates = new Set([nfa.startState as EndlicherState]);
    const startStateClosureSet = new Set(EndlicherState.eClosure2(startNfaStates)); // Nutze die statische Methode
    const startStateKey = this.getStateSetKey(startStateClosureSet); // Eindeutiger String-Key für diese Menge

    // 4. Startzustand zur Verarbeitung hinzufügen (wenn nicht leer)
    if (startStateKey !== '∅') {
      dfaStateSets.set(startStateKey, startStateClosureSet); // Menge merken
      unprocessedSets.push(startStateClosureSet);         // Zur Warteschlange hinzufügen
      unprocessedKeys.add(startStateKey);                  // Key merken
    } else {
      // Sonderfall: Selbst die ε-Hülle des Startzustands ist leer.
      // Das bedeutet, der DFA hat nur den Fehlerzustand (leere Menge).
      console.warn("DFA Solution Table: Startzustand ε-Hülle ist leer. Erzeuge nur ∅-Zustand.");
      const emptyRow: SolutionTableRow = {
        id: rowIdCounter++, // ID 1
        states: [this.emptyState], // Zustand ist die leere Menge
        markers: [], // Keine Marker
        transitions: {} // Übergänge initialisieren
      };
      const alphabet = this.symbols; // Alphabet holen
      for (const symbol of alphabet) {
        emptyRow.transitions[symbol] = [this.emptyState]; // Leere Menge führt für alle Symbole zur leeren Menge
      }
      solutionData.push(emptyRow);
      return solutionData; // Nur die Zeile für die leere Menge zurückgeben
    }

    // 5. Alphabet des NFA bestimmen (ohne Epsilon)
    const alphabet = this.symbols; // Nutze den Getter

    // 6. Zustände iterativ verarbeiten (Breitensuche)
    while (unprocessedSets.length > 0) {
      // Nächste Zustandsmenge aus der Warteschlange holen (FIFO)
      const currentNfaStatesSet = unprocessedSets.shift()!;
      const currentStateKey = this.getStateSetKey(currentNfaStatesSet);

      // TableRow-Objekt für diesen *gerade verarbeiteten* DFA-Zustand erstellen
      const currentRow: SolutionTableRow = {
        id: rowIdCounter++, // ID in Verarbeitungsreihenfolge zuweisen
        states: this.getStatesFromSet(currentNfaStatesSet), // NFA-Zustände für diese Zeile holen und sortieren
        markers: [], // Marker initialisieren
        transitions: {} // Übergänge initialisieren
      };

      // 7. Marker bestimmen
      // Startzustands-Marker?
      if (currentStateKey === startStateKey) {
        currentRow.markers.push('(A)');
      }
      // Endzustands-Marker? (Wenn *irgendein* NFA-Zustand in der Menge ein Endzustand ist)
      let isFinal = false;
      for (const nfaState of currentNfaStatesSet) {
        // Prüfe, ob der NFA diesen Zustand als Endzustand kennt
        if (nfa.finalStates.has(nfaState)) {
          isFinal = true;
          break;
        }
      }
      if (isFinal) {
        currentRow.markers.push('(E)');
      }
      currentRow.markers.sort(); // Konsistente Reihenfolge der Marker

      // 8. Übergänge für jedes Symbol im Alphabet berechnen
      for (const symbol of alphabet) {
        // a) 'move'-Operation: Finde alle NFA-Zustände, die von der aktuellen Menge aus mit 'symbol' erreichbar sind
        const movedStates = EndlicherState.move2(Array.from(currentNfaStatesSet), symbol); // Nutze statische Methode

        // b) 'ε-closure'-Operation: Berechne die ε-Hülle der erreichten Zustände
        const nextNfaStateClosureSet = new Set(EndlicherState.eClosure2(new Set(movedStates))); // Nutze statische Methode
        const nextStateKey = this.getStateSetKey(nextNfaStateClosureSet); // Eindeutiger Key für die Zielmenge

        // c) Übergangsziel in der aktuellen Zeile speichern (als sortierte Liste von EndlicherState)
        currentRow.transitions[symbol] = this.getStatesFromSet(nextNfaStateClosureSet);

        // d) Neue Zustandsmenge zur Warteschlange hinzufügen, falls sie noch nicht entdeckt wurde
        if (!dfaStateSets.has(nextStateKey) && !unprocessedKeys.has(nextStateKey)) {
          dfaStateSets.set(nextStateKey, nextNfaStateClosureSet); // Neue Menge merken
          unprocessedSets.push(nextNfaStateClosureSet);         // Zur Verarbeitung hinzufügen
          unprocessedKeys.add(nextStateKey);                     // Key merken
        }
      }

      // 9. Die vollständig berechnete Zeile zum Ergebnis hinzufügen
      solutionData.push(currentRow);
    }

    // 10. Optional: Prüfen, ob der leere Zustand (∅) referenziert, aber nicht erstellt wurde
    // (passiert, wenn ein Übergang in die leere Menge führt, diese aber nie als eigene Zeile vorkam)
    const emptyStateIsReferenced = solutionData.some(row =>
        Object.values(row.transitions).flat().some(s => s.id === this.emptyState.id)
    );
    const emptyStateRowExists = dfaStateSets.has('∅'); // Prüfen, ob der Key '∅' existiert

    if (emptyStateIsReferenced && !emptyStateRowExists) {
      console.warn("DFA Solution Table: Leerer Zustand (∅) wird referenziert, aber hat keine eigene Zeile. Füge sie hinzu.");
      const emptyRow: SolutionTableRow = {
        id: rowIdCounter++,
        states: [this.emptyState],
        markers: [], // Leerer Zustand ist nie Start/Ende (per Definition hier)
        transitions: {}
      };
      for (const symbol of alphabet) {
        emptyRow.transitions[symbol] = [this.emptyState]; // ∅ führt immer zu ∅
      }
      solutionData.push(emptyRow);
    }

    // 11. Ergebnis zurückgeben
    return solutionData;
  }


  // --- Methoden für die Anzeige DIESER Komponente ---

  /**
   * Löst die Generierung der Tabelle aus und aktualisiert den Zustand
   * für die Anzeige in *dieser* Komponente (dfa-solution-table).
   * Wird durch ngOnChanges oder den "Neu generieren"-Button aufgerufen.
   */
  public regenerateTable(): void {
    this.isLoading = true;
    this.solutionTableData = null; // Alte Daten löschen
    this.errorMsg = null;          // Alte Fehler löschen

    // Kurze Verzögerung, damit der Ladeindikator sichtbar wird
    setTimeout(() => {
      try {
        // Stelle sicher, dass die Map aktuell ist, bevor generiert wird
        this.buildNfaStateMap();
        // Rufe die synchrone interne Generierungslogik auf
        const generatedData = this.generateSolutionTableDataInternal();

        if (!generatedData || generatedData.length === 0) {
          // Kann passieren, wenn z.B. nur der ∅-Zustand erzeugt wird, was gültig ist.
          // Aber wenn generateSolutionTableDataInternal einen Fehler werfen würde, kämen wir hier nicht an.
          // Daher prüfen wir auf leeres Array oder null (sollte nicht null sein wegen Fehlerwurf).
          console.warn("DFA Solution Table Display: Generierte Lösungsdaten sind leer.");
          this.solutionTableData = generatedData; // Setze ggf. leeres Array oder nur ∅-Zeile
          // Keine Fehlermeldung, da ein leerer Automat oder nur ∅ gültig sein kann.
          // Man könnte eine spezifischere Meldung anzeigen:
          // this.errorMsg = "Der resultierende DFA enthält keine Zustände außer ggf. dem Fehlerzustand (∅).";
        } else {
          this.solutionTableData = generatedData;
        }

      } catch (error: any) {
        // Fange Fehler aus generateSolutionTableDataInternal ab
        console.error("Fehler bei Generierung der DFA-Lösungstabelle (Anzeige):", error);
        this.errorMsg = `Fehler beim Generieren der Tabelle: ${error.message || 'Unbekannter Fehler'}`;
        this.solutionTableData = null; // Keine Daten bei Fehler
      } finally {
        this.isLoading = false; // Ladezustand beenden
      }
    }, 10); // Kurze Verzögerung (10ms)
  }

  // Alias für den Button-Click im Template, falls wir `regenerateTable` public lassen wollen
  public triggerTableGenerationForDisplay(): void {
    this.regenerateTable();
  }


  // --- Private Hilfsfunktionen ---

  /**
   * Erzeugt einen eindeutigen String-Schlüssel für eine Menge von Zuständen.
   * Wichtig für die Verwaltung entdeckter Zustandsmengen.
   * Sortiert die IDs numerisch. Behandelt den leeren Zustand ('∅').
   * @param stateSet Die Menge der Zustände (als Set oder Array).
   * @returns Den String-Schlüssel (z.B. "1,3,5" oder "∅").
   */
  private getStateSetKey(stateSet: Set<EndlicherState> | EndlicherState[]): string {
    const states = Array.isArray(stateSet) ? stateSet : Array.from(stateSet);

    // Fall 1: Leere Menge oder enthält nur den leeren Zustand
    if (!states || states.length === 0 || (states.length === 1 && states[0]?.id === this.emptyState.id)) {
      return '∅';
    }

    // Fall 2: Enthält Zustände
    const validStates = states.filter(s => s && typeof s.id !== 'undefined' && s.id !== this.emptyState.id);

    // Wenn nach dem Filtern keine gültigen Zustände übrig sind (z.B. nur null/undefined drin waren)
    if (validStates.length === 0) {
      return '∅';
    }

    // Sortiere die IDs numerisch und verbinde sie mit Komma
    return validStates
        .map(s => s.id)
        .sort((a, b) => (a as number) - (b as number)) // Numerische Sortierung
        .join(',');
  }

  /**
   * Konvertiert eine Menge von Zuständen in ein sortiertes Array von Zuständen.
   * Gibt ein Array mit nur dem leeren Zustand zurück, wenn die Menge leer ist.
   * @param stateSet Die Menge der Zustände.
   * @returns Ein sortiertes Array von EndlicherState-Objekten.
   */
  private getStatesFromSet(stateSet: Set<EndlicherState>): EndlicherState[] {
    if (!stateSet || stateSet.size === 0) {
      return [this.emptyState]; // Wichtig: Gib Array mit dem leeren Zustand zurück
    }
    // Konvertiere das Set zu einem Array und sortiere es nach ID
    return Array.from(stateSet)
        .sort((a, b) => {
          const idA = a.id ?? -Infinity; // Behandle fehlende IDs
          const idB = b.id ?? -Infinity;
          return (idA as number) - (b.id as number); // Numerische Sortierung
        });
  }


  // --- Getter für das Template ---

  /**
   * Gibt das Alphabet des Automaten zurück (alle eindeutigen Übergangssymbole außer Epsilon).
   * Sortiert für konsistente Spaltenreihenfolge.
   */
  get symbols(): string[] {
    const automat = this.automat;
    if (!automat) return [];

    const uniqueSymbols: Set<string> = new Set();
    const allStates = automat.getAllStates() as EndlicherState[];

    if (allStates) {
      allStates.forEach(state => {
        // Prüfe, ob state.transitions existiert und ein Array ist
        if (state.transitions && Array.isArray(state.transitions)) {
          state.transitions.forEach(trans => {
            // Sicherstellen, dass trans eine EndlicheTransition ist und transitionSymbols hat
            const transition = trans as EndlicheTransition;
            if (transition.transitionSymbols && Array.isArray(transition.transitionSymbols)) {
              transition.transitionSymbols.forEach(sym => {
                if (sym !== EndlicherAutomat.epsilon && typeof sym === 'string') { // Nur Strings hinzufügen
                  uniqueSymbols.add(sym);
                }
              });
            }
          });
        }
      });
    }
    return Array.from(uniqueSymbols).sort(); // Alphabet sortieren
  }

  // --- TrackBy Funktionen für *ngFor Performance ---
  // Werden vom Template dieser Komponente verwendet

  trackRowById(index: number, row: SolutionTableRow): number {
    return row.id;
  }

  trackSymbol(index: number, symbol: string): string {
    return symbol;
  }

  trackStateById(index: number, state: EndlicherState): number | string {
    // Verwende die ID des Zustands oder den Index als Fallback
    return state.id ?? `state-${index}`;
  }

  trackMarkerId(index: number, markerId: string): string {
    return markerId;
  }
}