import {AfterViewInit, Component, OnInit} from '@angular/core';
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
export class InputTableComponent implements AfterViewInit {
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

  ngAfterViewInit() {
    // Stelle sicher, dass nur die Zellen selbst fokussierbar sind
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
      cell.tabIndex = 0;
      // Entferne tabindex von allen Kindelementen
      cell.querySelectorAll('*').forEach(child => {
        if(child.hasAttribute('tabindex')) {
          child.removeAttribute('tabindex');
        }
      });
    });
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

  // Zustand zu einer Zelle hinzufügen oder entfernen, wenn er bereits existiert
  addStateToCell(stateId: string): void {
    if (!this.activeCell || !this.activeCellType) return;

    this.tableData = this.tableData.map(row => {
      if (row.id === this.activeCell) {
        if (this.activeCellType === 'state') {
          // Zustand zur Zustandsspalte hinzufügen/entfernen (toggle)
          const hasState = row.states.includes(stateId);
          return {
            ...row,
            states: hasState
                ? row.states.filter(s => s !== stateId)
                : [...row.states, stateId]
          };
        } else {
          // Zustand zur Übergangsspalte hinzufügen/entfernen (toggle)
          const symbol = this.activeCellType as string;
          const hasState = row.transitions[symbol]?.includes(stateId);
          return {
            ...row,
            transitions: {
              ...row.transitions,
              [symbol]: hasState
                  ? row.transitions[symbol].filter(s => s !== stateId)
                  : [...row.transitions[symbol], stateId]
            }
          };
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