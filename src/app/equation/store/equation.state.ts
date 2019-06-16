import { State, Action, StateContext, Selector } from '@ngxs/store';

import { UpdateAsciiMathEquation, UpdateTexEquation, AddToAsciiMathEquation } from './equation.actions';

export interface EquationStateModel {

    asciiMathEquation: string;
    texEquation: string;
}

@State<EquationStateModel>({
    name: 'equation',
    defaults: {
        asciiMathEquation: '',
        texEquation: '',
    }
})

export class EquationState {

    constructor() { }

    @Action(UpdateAsciiMathEquation) updateAsciiMathEquation(context: StateContext<EquationStateModel>, action: UpdateAsciiMathEquation) {
        context.patchState({
            asciiMathEquation: action.equation,
        });
    }

    @Action(UpdateTexEquation) updateTexEquation(context: StateContext<EquationStateModel>, action: UpdateTexEquation) {
        context.patchState({
            texEquation: action.equation,
        });
    }

    @Action(AddToAsciiMathEquation) addToAsciiMathEquation(context: StateContext<EquationStateModel>, action: AddToAsciiMathEquation) {
        const currentEquation: string = context.getState().asciiMathEquation;
        context.patchState({
            asciiMathEquation: currentEquation.concat(action.equation),
        });
    }
}