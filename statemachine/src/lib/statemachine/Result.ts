import { State } from "./state";

export class Result {

    activeStates: Set<State>;
    isAccepting?: boolean;

    constructor(states: State[], isAccepting?: boolean) {
        this.activeStates = new Set(states);
        this.isAccepting = isAccepting;
    }
}