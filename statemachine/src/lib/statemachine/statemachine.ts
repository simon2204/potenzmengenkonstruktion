import { Result } from "./Result";
import { State } from "./state";
import { Transition } from "./stateconnections/Transition";

export abstract class StateMachine {

    title: string = "New State Machine";

    description: string = "";

    startState?: State

    protected allStates: State[] = [];

    finalStates: Set<State> = new Set();

    abstract makeState(x: number, y: number, id: number): State;

    _input: string = "";

    abstract input: string;

    getAllStates(): State[] {
        return this.allStates;
    }

    getAllTransitions(): Transition[] {
        return this.allStates.flatMap((state) => [...state.transitions]);
    }

    addState(x: number, y: number): State {
        const newState = this.makeState(x, y, this.makeId());
        if (this.startState == undefined) { this.startState = newState; }
        this.allStates.push(newState);
        return newState;
    }

    private makeId(): number {
        let id = 0;
        while (this.allStates.some((state) => state.id == id)) {
            id++;
        }
        return id;
    }

    deleteState(state: State): void {

        // Remove start if state is start state.
        if (this.startState == state) {
            this.startState = undefined;
        }

        // Remove state from final states.
        this.finalStates.delete(state);

        // Remove transitions where 'state' is the destination state
        this.getAllTransitions().forEach((transition) => {
            if (transition.destination === state) {
                transition.delete();
            }
        });

        let index = this.allStates.findIndex(obj => obj === state);
        this.allStates.splice(index, 1);
    }

    isStartState(state: State): boolean {
        return state === this.startState;
    }

    isFinalState(state: State): boolean {
        return this.finalStates.has(state);
    }

    isDeterministic(): boolean {
        return ![...this.getAllStates()].some((state) => !state.isDeterministic());
    }

    abstract isAcceptingWord(word: string): Result;

    abstract activeStates(word: string): Set<State>;

    abstract createNewInstance(): StateMachine;
  
    abstract loadFromBrowserCache(): StateMachine;
  
    abstract saveToBrowserCache(): void;
  
    abstract createInstanceFromJSON(configuration: any): StateMachine;
  
    abstract saveToLocalStorage(): void;
}
