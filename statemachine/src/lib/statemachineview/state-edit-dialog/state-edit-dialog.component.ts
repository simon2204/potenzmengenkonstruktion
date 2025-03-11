import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { StatemachineService } from '../../statemachine/statemachine.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { State } from '../../statemachine/state';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-state-edit-dialog',
  standalone: true,
  imports: [MatIcon, CommonModule, MatFormFieldModule, FormsModule, MatInputModule, MatTableModule, MatDialogModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './state-edit-dialog.component.html',
  styleUrl: './state-edit-dialog.component.scss'
})
export class StateEditDialogComponent {
  constructor(
    public service: StatemachineService,
    public dialogRef: MatDialogRef<StateEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: State) {
  }

  onEnter() {
    this.dialogRef.close();
  }

  deleteState() {
    this.service.deleteState(this.data);
    this.dialogRef.close();
  }

  isStartState(): boolean {
    return this.service.isStartState(this.data);
  }

  isFinalState(): boolean {
    return this.service.isFinalState(this.data);
  }

  toggleStart(isChecked: boolean) {
    this.service.stateMachine.startState = isChecked ? this.data : undefined;
  }
  
  toggleFinal(isChecked: boolean) {
    if (isChecked) {
        this.service.stateMachine.finalStates = new Set([
            ...this.service.stateMachine.finalStates,
            this.data,
        ]);
    } else {
        this.service.stateMachine.finalStates.delete(this.data);
        this.service.stateMachine.finalStates = new Set([
            ...this.service.stateMachine.finalStates
        ]);
    }
  }
}
