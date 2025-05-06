import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndlicherAutomat } from '../endlicherautomat/EndlicherAutomat';
import { EndlicherState } from '../endlicherautomat/EndlicherState';
import { StateBlockComponent } from "../inputTable/state-block/state-block.component";
import { DfaGeneratorService, SolutionTableRow, MarkerItem } from '../services/dfa-generator-service.service'; // Import from service

@Component({
  selector: 'app-dfa-solution-table',
  templateUrl: './dfa-solution-table.component.html',
  styleUrls: ['./dfa-solution-table.component.scss'],
  standalone: true,
  imports: [ CommonModule, StateBlockComponent ]
})
export class DfaSolutionTableComponent implements OnChanges {

  @Input() automat: EndlicherAutomat | null = null;

  solutionTableData: SolutionTableRow[] | null = null;
  isLoading: boolean = false;
  errorMsg: string | null = null;

  // Marker definitions can stay if they are specific to this component's display needs,
  // or be sourced from a shared constant / service if truly global.
  public readonly markers: MarkerItem[] = [
    { id: '(A)', label: 'A' },
    { id: '(E)', label: 'E' }
  ];

  constructor(private dfaGeneratorService: DfaGeneratorService) {
    // emptyState and nfaStateMap are now managed by the service
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['automat']) { // Handles both new automat and automat becoming null
      this.triggerTableGenerationForDisplay();
    }
  }

  public regenerateTable(): void {
    this.isLoading = true;
    this.solutionTableData = null;
    this.errorMsg = null;

    if (!this.automat) {
      this.errorMsg = "Kein Automat vorhanden.";
      this.isLoading = false;
      return;
    }

    setTimeout(() => {
      try {
        // The service handles its internal state like nfaStateMap
        const generatedData = this.dfaGeneratorService.generateSolutionTable(this.automat);

        if (!generatedData || generatedData.length === 0) {
          console.warn("DFA Solution Table Display: Generierte Lösungsdaten sind leer.");
          this.solutionTableData = generatedData; // Might be an empty array or just ∅-row
        } else {
          this.solutionTableData = generatedData;
        }

      } catch (error: any) {
        console.error("Fehler bei Generierung der DFA-Lösungstabelle (Anzeige):", error);
        this.errorMsg = `Fehler beim Generieren der Tabelle: ${error.message || 'Unbekannter Fehler'}`;
        this.solutionTableData = null;
      } finally {
        this.isLoading = false;
      }
    }, 10);
  }

  public triggerTableGenerationForDisplay(): void {
    // If automat is null, regenerateTable will handle it
    this.regenerateTable();
  }

  get symbols(): string[] {
    // Get alphabet from the service
    return this.dfaGeneratorService.getAlphabet(this.automat);
  }

  trackRowById(index: number, row: SolutionTableRow): number {
    return row.id;
  }

  trackSymbol(index: number, symbol: string): string {
    return symbol;
  }

  trackStateById(index: number, state: EndlicherState): number | string {
    return state.id ?? `state-${index}`;
  }

  trackMarkerId(index: number, markerId: string): string {
    return markerId;
  }
}