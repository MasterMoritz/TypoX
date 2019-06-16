import { State, Action, StateContext, Selector } from '@ngxs/store';

import { UpdateAsciiMathEquation, UpdateTexEquation } from './equation.actions';

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
}