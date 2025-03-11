import { Point } from "../drawingprimitives/Point";
import { State } from "../state";
import {Transition} from "./Transition";

export abstract class StateConnection {

    get source(): State {
        return this.transition.source;
    }

    get destination(): State {
        return this.transition.destination;
    }

    getCenterPoint(): Point | undefined {
        return this.transition.absolutCenterPoint();
    }

    constructor(public transition: Transition) {}

    abstract path(): string;

    abstract arrow(): string;

    abstract calculateRectanglePlacementAbovePath(width: number, height: number): Point;
}