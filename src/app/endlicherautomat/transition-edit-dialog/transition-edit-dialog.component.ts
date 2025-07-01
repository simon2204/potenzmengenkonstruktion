//Dieser Code stammt aus dem vorgegebenen Projekt "Endlicher Automat"

import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EndlicheTransition } from '../EndlicheTransition';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transition-edit-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
  ],
  templateUrl: './transition-edit-dialog.component.html',
  styleUrl: './transition-edit-dialog.component.scss',
})
export class TransitionEditDialogComponent implements OnInit, OnDestroy {
  newSymbol = '';

  displayedColumns: string[] = ['symbol', 'actions'];

  private keydownListener: ((e: KeyboardEvent) => void) | null = null;
  private backdropClickSubscription: Subscription | null = null;

  private get firstField(): HTMLElement | null {
    return document.getElementById('modalinput');
  }

  constructor(
    public dialogRef: MatDialogRef<TransitionEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EndlicheTransition
  ) {
    this.backdropClickSubscription = this.dialogRef.backdropClick().subscribe(() => this.closeModal());
    
    this.keydownListener = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && this.newSymbol.length > 0) {
        this.addRow();
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', this.keydownListener);
  }

  ngOnInit(): void {
    this.firstField?.focus();
  }

  epsilon() {
    this.newSymbol = 'ε';
  }

  addRow() {
    if (this.newSymbol == '') {
      return;
    }
    this.data.transitionSymbols = [
      ...this.data.transitionSymbols,
      this.newSymbol,
    ];
    this.reset();
  }

  epsilonRow(index: number) {
    this.data.transitionSymbols[index] = 'ε';
    this.data.transitionSymbols = [...this.data.transitionSymbols];
  }

  removeRow(index: number) {
    this.data.transitionSymbols.splice(index, 1);
    this.data.transitionSymbols = [...this.data.transitionSymbols];
  }

  reset() {
    this.newSymbol = '';
    this.firstField?.focus();
  }

  okay() {
    this.addRow();
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close(this.data.isEmpty());
  }

  ngOnDestroy(): void {
    if (this.keydownListener) {
      document.removeEventListener('keydown', this.keydownListener);
      this.keydownListener = null;
    }
    
    if (this.backdropClickSubscription) {
      this.backdropClickSubscription.unsubscribe();
      this.backdropClickSubscription = null;
    }
  }
}
