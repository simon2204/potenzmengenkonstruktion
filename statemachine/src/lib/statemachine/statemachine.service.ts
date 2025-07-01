// Erweiterte Version von statemachine.service.ts mit Auto-Load und Observable

import { Injectable } from '@angular/core';
import { StateMachine } from './statemachine';
import { State } from './state';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Transition } from './stateconnections/Transition';
// Tutorial Dialog muss von der Anwendung bereitgestellt werden
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatemachineService {

  public stateMachine!: StateMachine;
  private automatonChangedSubject = new Subject<void>();
  public onAutomatonChanged = this.automatonChangedSubject.asObservable();

  showDeterministicStates: boolean = false;
  testCaseViewIsVisible: boolean = true;
  testcaseViewToggled?: () => void;

  constructor(public dialog: MatDialog) {
    // Auto-load from browser cache on service initialization
    this.loadFromBrowserCacheOnInit();
  }

  private loadFromBrowserCacheOnInit(): void {
    try {
      const savedData = localStorage.getItem('endlicherautomat');
      if (savedData && this.stateMachine) {
        const json = JSON.parse(savedData);
        this.stateMachine = this.stateMachine.createInstanceFromJSON(json);
        console.log('Automatisch aus Browser-Cache geladen');
        this.automatonChangedSubject.next();
      }
    } catch (error) {
      console.error('Fehler beim automatischen Laden aus Browser-Cache:', error);
    }
  }

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
    const newState = this.stateMachine.addState(x, y);
    this.automatonChangedSubject.next();
    return newState;
  }

  deleteState(state: State): void {
    this.stateMachine.deleteState(state);
    this.automatonChangedSubject.next();
  }

  addTransition(source: State, destination: State): Transition {
    const transition = source.addTransition(destination);
    this.automatonChangedSubject.next();
    return transition;
  }

  removeTransition(transition: Transition): void {
    transition.delete();
    this.automatonChangedSubject.next();
  }

  get transitions(): Transition[] {
    return this.stateMachine.getAllTransitions();
  }

  openStateEditDialog(state: State, dialog: MatDialog): MatDialogRef<any, any> {
    const dialogRef = state.openEditDialog(dialog);
    dialogRef.afterClosed().subscribe(() => {
      this.automatonChangedSubject.next();
    });
    return dialogRef;
  }

  openTransitionEditDialog(source: State, destination: State, dialog: MatDialog): MatDialogRef<any, any> {
    const dialogRef = source.addTransition(destination).openTransitionDialog(dialog);
    dialogRef.afterClosed().subscribe(() => {
      this.automatonChangedSubject.next();
    });
    return dialogRef;
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
    this.automatonChangedSubject.next();
    // Clear localStorage when creating new instance
    localStorage.removeItem('endlicherautomat');
  }

  loadFromBrowserCache() {
    try {
      this.stateMachine = this.stateMachine.loadFromBrowserCache();
      this.automatonChangedSubject.next();
      console.log('Manuell aus Browser-Cache geladen');
    } catch (error) {
      console.error('Fehler beim Laden aus Browser-Cache:', error);
      alert('Fehler beim Laden aus dem Browser-Cache. Möglicherweise sind keine gespeicherten Daten vorhanden.');
    }
  }

  saveToBrowserCache() {
    try {
      this.stateMachine.saveToBrowserCache();
      console.log('In Browser-Cache gespeichert');
    } catch (error) {
      console.error('Fehler beim Speichern in Browser-Cache:', error);
    }
  }

  createInstanceFromJSON(configuration: any) {
    this.stateMachine = this.stateMachine.createInstanceFromJSON(configuration);
    this.automatonChangedSubject.next();
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

  // Dialog-Komponente für Hilfe/Tutorial
  private helpDialogComponent: any;

  setHelpDialogComponent(component: any): void {
    this.helpDialogComponent = component;
  }

  openHelpDialog(): void {
    if (this.helpDialogComponent) {
      this.dialog.open(this.helpDialogComponent, {
        maxWidth: '70vw',
        maxHeight: '90vh',
      });
    }
  }
}