import { State, Action, StateContext, Selector } from '@ngxs/store';

import { tap } from 'rxjs/operators';
import { UpdateAsciiMathEquation } from './equation.actions';

export interface EquationStateModel {

    asciiMathEquation: string;

}

@State<EquationStateModel>({
    name: 'equation',
    defaults: {
        asciiMathEquation: '',
    }
})

export class EquationState {

    constructor() { }

    @Action(UpdateAsciiMathEquation) updateAsciiMathEquation(context: StateContext<EquationStateModel>, action: UpdateAsciiMathEquation) {
        context.patchState({
            asciiMathEquation: action.equation,
        });
    }
}