import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateBlockComponent } from "./state-block/state-block.component";
import {EndlicherState} from "../endlicherautomat/EndlicherState";
import {StatemachineService} from "../../../statemachine/src/lib/statemachine/statemachine.service";
import {EndlicheTransition} from "../endlicherautomat/EndlicheTransition";
import {Point} from "../../../statemachine/src/lib/statemachine/drawingprimitives/Point";
import {DfaSolutionTableComponent} from "../dfa-solution-table/dfa-solution-table.component";
import {EndlicherAutomat} from "../endlicherautomat/EndlicherAutomat";

interface MarkerItem {
  id: string;
  label: string;
  color: string;
}

interface TableRow {
  id: number;
  states: EndlicherState[];
  markers: string[];
  transitions: { [symbol: string]: EndlicherState[] };
}

@Component({
  selector: 'app-inputTable',
  templateUrl: './inputTable.component.html',
  styleUrls: ['./inputTable.component.scss'],
  standalone: true,
  imports: [CommonModule, StateBlockComponent, DfaSolutionTableComponent]
})
export class InputTableComponent {

  private emptyState: EndlicherState;

  get stateMachine(): EndlicherAutomat {
    return this.service.stateMachine as EndlicherAutomat;
  }

  get availableStates(): EndlicherState[] {
    return [this.emptyState,  ...this.service.states as EndlicherState[]];
  }

  // Spezielle Markierungen
  markers: MarkerItem[] = [
    { id: '(A)', label: 'A', color: '#f59e0b' },
    { id: '(E)', label: 'E', color: '#ef4444' }
  ];

  get symbols(): string[] {
    const uniqueSymbols: Set<string> = new Set();
    for (const transition of this.service.transitions) {
      for (const symbol of (transition as EndlicheTransition).transitionSymbols) {
        if (symbol !== EndlicherAutomat.epsilon) {
          uniqueSymbols.add(symbol);
        }
      }
    }
    return Array.from(uniqueSymbols).sort();
  }

  // Tabellendaten
  tableData: TableRow[] = [];

  // Aktive Zelle zum Bearbeiten
  activeCell: number | null = null;
  // Typ der aktiven Zelle: 'state' (für Zustandszeile) oder ein Symbol ('0', '1')
  activeCellType: string | null = null;

  constructor(public service: StatemachineService) {
    this.tableData.push({
      id: 1,
      states: [],
      markers: [],
      transitions: this.getDefaultTransitions()
    })

    const state = new EndlicherState(Point.zero, 0.5);
    state.name = "∅";
    this.emptyState = state;
  }

  // Konvertiert HSL-Werte in einen Hex-Farbstring
  hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h < 60) {
      r = c; g = x; b = 0;
    } else if (h < 120) {
      r = x; g = c; b = 0;
    } else if (h < 180) {
      r = 0; g = c; b = x;
    } else if (h < 240) {
      r = 0; g = x; b = c;
    } else if (h < 300) {
      r = x; g = 0; b = c;
    } else {
      r = c; g = 0; b = x;
    }

    const R = Math.round((r + m) * 255);
    const G = Math.round((g + m) * 255);
    const B = Math.round((b + m) * 255);

    // Konvertiere jeden Farbwert in einen Hex-String
    return '#' + [R, G, B]
        .map(val => val.toString(16).padStart(2, '0'))
        .join('');
  }

  // Eine Zelle auswählen
  selectCell(rowId: number, type: string): void {
    this.activeCell = rowId;
    this.activeCellType = type;

    // Fokussiere die Zelle, aber warte einen Tick, um sicherzustellen, dass Angular die UI aktualisiert hat
    setTimeout(() => {
      const rowIndex = this.tableData.findIndex(row => row.id === rowId);
      const colIndex = type === 'state' ? 0 : this.symbols.indexOf(type) + 1;

      const rows = Array.from(document.querySelectorAll('tr'));
      // +1 weil der Header auch eine Zeile ist
      if (rows[rowIndex + 1]) {
        const cells = Array.from(rows[rowIndex + 1].querySelectorAll('td'));
        if (cells[colIndex]) {
          cells[colIndex].focus();
        }
      }
    });
  }

  // Helper zum Erzeugen der nächsten Zeilen-ID
  private getNextRowId(): number {
    return this.tableData.reduce((max, row) => Math.max(max, row.id), 0) + 1;
  }

  private numberOfRowsNeeded(): number {
    // Sammle alle eindeutigen State-Sets aus den Übergangszellen.
    const transitionStateSets = new Set<string>();

    if (this.tableData.length > 0) {
      const firstCell = this.tableData[0].states
      transitionStateSets.add(this.combineToOneState(firstCell));
    }

    for (const row of this.tableData) {
      for (const symbol of Object.keys(row.transitions)) {
        const states = row.transitions[symbol];
        if (states.length > 0) {
          const stateSet = this.combineToOneState(states);
          transitionStateSets.add(stateSet);
        }
      }
    }
    // Erste Zeile soll immer vorhanden sein.
    return transitionStateSets.size > 0 ? transitionStateSets.size : 1;
  }

  private combineToOneState(states: EndlicherState[]): string {
    return states.map(s => s.id).sort().join(',');
  }

  private adjustRowCount(): void {
    const currentRows = this.tableData.length
    const rowsNeeded = this.numberOfRowsNeeded();
    const missingRows = rowsNeeded - currentRows;

    // Füge leere Zeilen hinzu.
    for (let i = 0; i < missingRows; i++) {
      this.tableData.push({
        id: this.getNextRowId(),
        states: [],
        markers: [],
        transitions: this.getDefaultTransitions()
      });
    }

    // Entferne die letzten leeren Zeilen, die zu viel sind.
    for (let i = missingRows; i < 0; i++) {
      const lastRow = this.tableData[this.tableData.length - 1]
      if (this.isRowEmpty(lastRow)) {
        this.tableData.pop();
      }
    }

    console.log(missingRows);
  }

  private isRowEmpty(row: TableRow): boolean {
    // Eine Zeile ist leer, wenn keine Zustände, keine Markierungen und alle Übergänge leer sind.
    if (row.states.length > 0 || row.markers.length > 0) {
      return false;
    }
    return Object.values(row.transitions).every(transitionArray => transitionArray.length === 0);
  }

  addStateToCell(state: EndlicherState): void {
    if (!this.activeCell || !this.activeCellType) return;

    if (this.activeCellType === 'state') {
      // Toggle in der linken Spalte
      this.tableData = this.tableData.map(row => {
        if (row.id === this.activeCell) {
          const hasState = row.states.includes(state);
          return {
            ...row,
            states: hasState
                ? row.states.filter(s => s.id !== state.id)
                : [...row.states, state]
          };
        }
        return row;
      });
    } else {
      // Toggle in der Übergangszelle
      const symbol = this.activeCellType as string;
      this.tableData = this.tableData.map(row => {
        if (row.id === this.activeCell) {
          const currentStates = row.transitions[symbol] || [];
          const hasState = currentStates.includes(state);
          const updatedStates = hasState
              ? currentStates.filter(s => s.id !== state.id)
              : [...currentStates, state];
          return {
            ...row,
            transitions: {
              ...row.transitions,
              [symbol]: updatedStates
            }
          };
        }
        return row;
      });
    }

    // Nach jedem Edit prüfen, wie viele leere Zeilen benötigt werden.
    this.adjustRowCount();
  }

  private updateEmptyRows(): void {
    // Sammle alle eindeutigen State-Sets aus den linken Zellen.
    const leftStateSets = new Set<string>();
    for (const row of this.tableData) {
      if (row.states.length > 0) {
        const sortedIds = row.states.map(s => s.id).sort();
        leftStateSets.add(sortedIds.join(','));
      }
    }

    // Sammle alle eindeutigen State-Sets aus den Übergangszellen.
    const transitionStateSets = new Set<string>();
    for (const row of this.tableData) {
      for (const symbol of Object.keys(row.transitions)) {
        const states = row.transitions[symbol];
        if (states.length > 0) {
          const sortedIds = states.map(s => s.id).sort();
          transitionStateSets.add(sortedIds.join(','));
        }
      }
    }

    // Bestimme, wie viele leere Zeilen benötigt werden:
    // Jede transition-States-Menge, die noch nicht in den linken Zellen vorkommt, soll eine leere Zeile darstellen.
    let missingCount = 0;
    for (const ts of transitionStateSets) {
      if (!leftStateSets.has(ts)) {
        missingCount++;
      }
    }

    // Zähle die aktuell vorhandenen leeren Zeilen.
    const emptyRows = this.tableData.filter(row => row.states.length === 0);
    const currentEmptyCount = emptyRows.length;

    if (currentEmptyCount < missingCount) {
      // Fehlende leere Zeilen hinzufügen.
      const diff = missingCount - currentEmptyCount;
      for (let i = 0; i < diff; i++) {
        this.tableData.push({
          id: this.getNextRowId(),
          states: [],
          markers: [],
          transitions: this.getDefaultTransitions()
        });
      }
    } else if (currentEmptyCount > missingCount) {
      // Überschüssige leere Zeilen entfernen.
      let toRemove = currentEmptyCount - missingCount;
      // Entferne leere Zeilen – zum Beispiel von hinten:
      this.tableData = this.tableData.filter(row => {
        if (row.states.length === 0 && toRemove > 0) {
          toRemove--;
          return false;
        }
        return true;
      });
    }
  }

  // Zustand aus einer Zelle entfernen
  removeStateFromCell(rowId: number, state: EndlicherState): void {
    this.tableData = this.tableData.map(row => {
      if (row.id === rowId) {
        return { ...row, states: row.states.filter(s => s.id !== state.id) };
      }
      return row;
    });

    this.adjustRowCount();
  }

  // Zustand aus einer Übergangszelle entfernen
  removeTransitionState(rowId: number, symbol: string, state: EndlicherState): void {
    this.tableData = this.tableData.map(row => {
      if (row.id === rowId) {
        return {
          ...row,
          transitions: {
            ...row.transitions,
            [symbol]: row.transitions[symbol].filter(s => s.id !== state.id)
          }
        };
      }
      return row;
    });

    this.updateEmptyRows();
  }

  // Markierung zu einer Zelle hinzufügen/entfernen
  toggleMarker(rowId: number, markerId: string): void {
    this.tableData = this.tableData.map(row => {
      if (row.id === rowId) {
        const hasMarker = row.markers.includes(markerId);
        return {
          ...row,
          markers: hasMarker
              ? row.markers.filter(m => m !== markerId)
              : [...row.markers, markerId]
        };
      }
      return row;
    });
  }

  // Tabelle zurücksetzen
  resetTable(): void {
    this.tableData = this.tableData.map(row => ({
      ...row,
      states: [],
      markers: [],
      transitions: this.getDefaultTransitions()
    }));
    this.activeCell = null;
    this.activeCellType = null;
  }

  private getDefaultTransitions(): { [symbol: string]: EndlicherState[] } {
    return Object.fromEntries(this.symbols.map(symbol => [symbol, []]));
  }

  // Zustandsfarbe finden
  getStateColor(stateId: number): string {
    const total = this.availableStates.length;
    const hue = Math.floor((360 / total) * stateId);
    return this.hslToHex(hue, 80, 40)
  }

  // Markierungsfarbe finden
  getMarkerColor(markerId: string): string {
    const marker = this.markers.find(m => m.id === markerId);
    return marker ? marker.color : '#000000';
  }

  // Prüfung simulieren
  checkTable(): void {
    console.log("Tabellendaten:", this.tableData);
    alert("Prüfung durchgeführt! (Details in der Konsole)");
  }

  // Tastaturfunktionalität
  handleKeyDown(event: KeyboardEvent, rowId: number, type: string): void {
    // Aktuelle Zelle auswählen, wenn sie noch nicht ausgewählt ist
    if (this.activeCell !== rowId || this.activeCellType !== type) {
      this.selectCell(rowId, type);
      return;
    }

    // Index der aktuellen Zeile und Spalte bestimmen
    const rowIndex = this.tableData.findIndex(row => row.id === rowId);
    let colIndex = type === 'state' ? 0 : this.symbols.indexOf(type) + 1;

    let newRowIndex = rowIndex;
    let newColIndex = colIndex;

    // Navigation mit Pfeiltasten
    switch (event.key) {
      case 'ArrowUp':
        newRowIndex = Math.max(0, rowIndex - 1);
        event.preventDefault();
        break;
      case 'ArrowDown':
        newRowIndex = Math.min(this.tableData.length - 1, rowIndex + 1);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        newColIndex = Math.max(0, colIndex - 1);
        event.preventDefault();
        break;
      case 'ArrowRight':
        newColIndex = Math.min(this.symbols.length, colIndex + 1);
        event.preventDefault();
        break;
      case 'Enter':
      case ' ':
        // Wenn Enter oder Leertaste gedrückt wurde, simuliere einen Klick
        // Je nach Zelltyp könntest du unterschiedliche Aktionen auslösen
        event.preventDefault();
        return;
    }

    // Neue aktive Zelle setzen, wenn sich die Position geändert hat
    if (newRowIndex !== rowIndex || newColIndex !== colIndex) {
      const newRow = this.tableData[newRowIndex];
      const newType = newColIndex === 0 ? 'state' : this.symbols[newColIndex - 1];

      this.selectCell(newRow.id, newType);

      // Fokus auf die neue Zelle setzen
      setTimeout(() => {
        const rows = Array.from(document.querySelectorAll('tr'));
        const cells = Array.from(rows[newRowIndex + 1].querySelectorAll('td')); // +1 weil der Header auch eine Zeile ist
        const cell = cells[newColIndex];

        if (cell) {
          cell.focus();
        }
      });
    }
  }
}