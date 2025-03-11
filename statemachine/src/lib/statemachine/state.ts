import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Point } from "./drawingprimitives/Point";
import { Transition } from "./stateconnections/Transition";
import { StateEditDialogComponent } from "../statemachineview/state-edit-dialog/state-edit-dialog.component";

export abstract class State {
  origin: Point;

  name: string;

  id: number;

  innerCircleHovered: boolean = false;

  outerCircleHovered: boolean = false;

  highlight = false;

  abstract transitions: Transition[];

  get x(): number {
    return this.origin.x;
  }

  set x(x: number) {
    this.origin.x = x;
  }

  get y(): number {
    return this.origin.y;
  }

  set y(y: number) {
    this.origin.y = y;
  }

  static get circleRadius(): number {
    return 30;
  }

  get r(): number {
    return State.circleRadius;
  }

  static get innerCircleRadius(): number {
    return State.circleRadius / 2;
  }

  constructor(origin: Point, id: number) {
    this.origin = origin;
    this.name = `S${id}`;
    this.id = id;
  }

  getConnectionPointToState(destination: State): Point {
    return destination.origin.moveToPoint(this.origin, State.circleRadius);
  }

  hasConnectionTo(state: State): boolean {
    return [...this.transitions].some((transition) => {
      return transition.destination === state;
    });
  }

  getTransitionTo(state: State): Transition | undefined {
    // Wenn this.transitions ein Set ist, konvertieren Sie es zu einem Array
    return [...this.transitions].find(
      (transition) => transition.destination === state
    );
  }

  toJSON(): Object {
    return {
      id: this.id,
      origin: this.origin,
      name: this.name,
      transitions: this.transitions,
    };
  }

  abstract makeTransition(destination: State): Transition;

  abstract isDeterministic(): boolean;

  openEditDialog(dialog: MatDialog): MatDialogRef<any, any> {
    return dialog.open(StateEditDialogComponent, { data: this });
  }

  addTransition(destination: State): Transition {
    // Check if transition already exists.
    let transition = [...this.transitions].find(
      (transition) => transition.destination == destination
    );

    // If transition does not exist, create it.
    if (transition == undefined) {
      transition = this.makeTransition(destination);
      this.transitions = [...this.transitions, transition];
    }

    return transition;
  }
}
