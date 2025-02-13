import { Action, createReducer, on } from '@ngrx/store';
import { CounterActions, INCREMENT_BY_VALUE, IncrementAction } from './counter.actions';
// import { increment, incrementByValue } from './counter.actions';

const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => {
//     return state + 1;
//   }),
//   on(incrementByValue, (state, action) => {
//     return state + action.value
//   })
// );

// ! Alternative of creating the reducers.
export function counterReducer(state = initialState, action: CounterActions | Action) {
  if (action.type === INCREMENT_BY_VALUE) {
    return state + (action as IncrementAction).value;
  }
  return state;
}
