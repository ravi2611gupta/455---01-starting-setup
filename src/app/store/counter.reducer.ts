import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
  set,
} from './counter.actions';
// import { increment, incrementByValue } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(incrementByValue, (state, action) => {
    return state + action.value;
  }),
  on(decrement, (state) => state - 1),
  on(decrementByValue, (state, action) => {
    return state - action.value;
  }),
  on(set, (state, action) => action.value)
);

// ! Alternative of creating the reducers.
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if (action.type === INCREMENT_BY_VALUE) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }
