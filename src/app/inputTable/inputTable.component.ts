import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateBlockComponent } from "./state-block/state-block.component";

interface StateItem {
  id: string;
  color: string;
}

interface MarkerItem {
  id: string;
  label: string;
  color: string;
}

interface TableRow {
  id: number;
  states: string[];
  markers: string[];
  transitions: { [symbol: string]: string[] };
}

@Component({
  selector: 'app-inputTable',
  templateUrl: './inputTable.component.html',
  styleUrls: ['./inputTable.component.scss'],
  standalone: true,
  imports: [CommonModule, StateBlockComponent]
})
export class InputTableComponent {
  // Verfügbare Zustände und ihre Farben
  availableStates: StateItem[] = [
    { id: 'S0', color: '#2563eb' },
    { id: 'S1', color: '#16a34a' },
    { id: 'S2', color: '#9333ea' }
  ];

  // Spezielle Markierungen
  markers: MarkerItem[] = [
    { id: '(A)', label: 'A', color: '#f59e0b' },
    { id: '(E)', label: 'E', color: '#ef4444' }
  ];

  // Symbole für die Tabellenüberschrift
  symbols: string[] = ['0', '1'];

  // Tabellendaten
  tableData: TableRow[] = [
    {
      id: 1,
      states: ['S0'],
      markers: ['(A)'],
      transitions: { '0': ['S0'], '1': ['S1'] }
    },
    {
      id: 2,
      states: ['S1'],
      markers: [],
      transitions: { '0': [], '1': ['S2'] }
    },
    {
      id: 3,
      states: ['S2'],
      markers: ['(E)'],
      transitions: { '0': ['S0'], '1': ['S2'] }
    }
  ];

  // Aktive Zelle zum Bearbeiten
  activeCell: number | null = null;
  // Typ der aktiven Zelle: 'state' (für Zustandszeile) oder ein Symbol ('0', '1')
  activeCellType: string | null = null;

  // Eine Zelle auswählen
  selectCell(rowId: number, type: string): void {
    this.activeCell = rowId;
    this.activeCellType = type;
  }

  // Zustand zu einer Zelle hinzufügen
  addStateToCell(stateId: string): void {
    if (!this.activeCell || !this.activeCellType) return;

    this.tableData = this.tableData.map(row => {
      if (row.id === this.activeCell) {
        if (this.activeCellType === 'state') {
          // Zustand zur Zustandsspalte hinzufügen
          if (!row.states.includes(stateId)) {
            return { ...row, states: [...row.states, stateId] };
          }
        } else {
          // Zustand zur Übergangsspalte hinzufügen
          const symbol = this.activeCellType as string; // Typecast, da wir wissen, dass es nicht null ist
          if (row.transitions[symbol] && !row.transitions[symbol].includes(stateId)) {
            return {
              ...row,
              transitions: {
                ...row.transitions,
                [symbol]: [...row.transitions[symbol], stateId]
              }
            };
          }
        }
      }
      return row;
    });
  }

  // Zustand aus einer Zelle entfernen
  removeStateFromCell(rowId: number, stateId: string): void {
    this.tableData = this.tableData.map(row => {
      if (row.id === rowId) {
        return { ...row, states: row.states.filter(s => s !== stateId) };
      }
      return row;
    });
  }

  // Zustand aus einer Übergangszelle entfernen
  removeTransitionState(rowId: number, symbol: string, stateId: string): void {
    this.tableData = this.tableData.map(row => {
      if (row.id === rowId) {
        return {
          ...row,
          transitions: {
            ...row.transitions,
            [symbol]: row.transitions[symbol].filter(s => s !== stateId)
          }
        };
      }
      return row;
    });
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
      transitions: Object.fromEntries(this.symbols.map(symbol => [symbol, []]))
    }));
    this.activeCell = null;
    this.activeCellType = null;
  }

  // Zustandsfarbe finden
  getStateColor(stateId: string): string {
    const state = this.availableStates.find(s => s.id === stateId);
    return state ? state.color : '#000000';
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
}