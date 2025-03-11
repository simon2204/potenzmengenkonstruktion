import { Injectable } from '@angular/core';
import { StateMachine } from './statemachine';
import { State } from './state';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Transition } from './stateconnections/Transition';

@Injectable({
  providedIn: 'root'
})
export class StatemachineService {

  public stateMachine!: StateMachine;

  showDeterministicStates: boolean = false;

  testCaseViewIsVisible: boolean = true;

  testcaseViewToggled?: () => void;

  get input(): string {
    return this.stateMachine.input;
  }

  get states(): State[] {
    return this.stateMachine.getAllStates();
  }

  isFinalState(state: State): boolean {
    return this.stateMachine.isFinalState(state);
  }

  isStartState(state: State): boolean {
    return this.stateMachine.isStartState(state);
  }

  addState(x: number, y: number): State {
    return this.stateMachine.addState(x, y);
  }

  deleteState(state: State): void {
    this.stateMachine.deleteState(state);
  }

  addTransition(source: State, destination: State): Transition {
    return source.addTransition(destination);
  }

  removeTransition(transition: Transition): void {
    return transition.delete();
  }

  get transitions(): Transition[] {
    return this.stateMachine.getAllTransitions();
  }

  openStateEditDialog(state: State, dialog: MatDialog): MatDialogRef<any, any> {
    return state.openEditDialog(dialog);
  }

  openTransitionEditDialog(source: State, destination: State, dialog: MatDialog): MatDialogRef<any, any> {
    return source.addTransition(destination).openTransitionDialog(dialog);
  }

  isActiveState(state: State): boolean {
    return this.stateMachine.activeStates(this.stateMachine.input).has(state);
  }

  isDeterministic(): boolean {
    return this.stateMachine.isDeterministic();
  }

  isStartStateDefined(): boolean {
    return this.stateMachine.startState != undefined;
  }

  createNewInstance() {
    this.stateMachine = this.stateMachine.createNewInstance();
  }

  loadFromBrowserCache() {
    this.stateMachine = this.stateMachine.loadFromBrowserCache();
  }

  saveToBrowserCache() {
    this.stateMachine.saveToBrowserCache();
  }

  createInstanceFromJSON(configuration: any) {
    this.stateMachine = this.stateMachine.createInstanceFromJSON(configuration);
  }

  saveToLocalStorage() {
    this.stateMachine.saveToLocalStorage();
  }

  inputChanged(input: string) {
    this.stateMachine.input = input;
  }

  isAccepting(): boolean | undefined {
    return this.stateMachine.isAcceptingWord(this.stateMachine.input).isAccepting;
  }
}
