import { State } from "../../statemachine/state";
import { StatemachineviewComponent } from "../statemachineview.component";
import { DefaultState } from "./defaultstate";
import { StateMachineViewState } from "./statemachineviewstate";

export class MoveNodeState extends StateMachineViewState {

    private movingState: State;
  
    private set movingStateX(value: number) {
      this.statemachineviewComponent.zone.run(() => this.movingState.x = value);
    }
  
    private set movingStateY(value: number) {
      this.statemachineviewComponent.zone.run(() => this.movingState.y = value);
    }
  
    constructor(statemachineviewComponent: StatemachineviewComponent, movingState: State) {
      super(statemachineviewComponent);
      this.movingState = movingState;
    }
  
    override onMouseUp(event: MouseEvent): void {
      this.movingState.innerCircleHovered = false;
      this.statemachineviewComponent.changeState(new DefaultState(this.statemachineviewComponent));
    }
  
    override onMouseMove(event: MouseEvent): void {
      const boundary = this.boundary;
      if (event.x > boundary.left + State.circleRadius && event.x < boundary.right - State.circleRadius) {
        this.movingStateX = event.clientX - boundary.left;
      }
      if (event.y > boundary.top + State.circleRadius && event.y < boundary.bottom - State.circleRadius) {
        this.movingStateY = event.clientY - boundary.top;
      }
    }
  }