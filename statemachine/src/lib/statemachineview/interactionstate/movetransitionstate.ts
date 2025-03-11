import {StateMachineViewState} from "./statemachineviewstate";
import {Transition} from "../../statemachine/stateconnections/Transition";
import {StatemachineviewComponent} from "../statemachineview.component";
import {DefaultState} from "./defaultstate";
import {Point} from "../../statemachine/drawingprimitives/Point";

export class MoveTransitionState extends StateMachineViewState {

    private transition: Transition

    constructor(statemachineviewComponent: StatemachineviewComponent, transition: Transition) {
        super(statemachineviewComponent);
        this.transition = transition;
    }

    override onMouseMove(event: MouseEvent) {
        const svgElement = this.statemachineviewComponent.svgFieldElementRef.nativeElement;
        const svgRect = svgElement.getBoundingClientRect();
        const newX = event.clientX - svgRect.left;
        const newY = event.clientY - svgRect.top;
        this.transition.centerPoint = new Point(newX, newY);
    }

    override onMouseUp(event: MouseEvent) {
        const defaultState = new DefaultState(this.statemachineviewComponent);
        this.statemachineviewComponent.changeState(defaultState);
    }

    override onAdjustableCircleMouseUp(event: MouseEvent, transition: Transition) {
        const defaultState = new DefaultState(this.statemachineviewComponent);
        this.statemachineviewComponent.changeState(defaultState);
    }
}