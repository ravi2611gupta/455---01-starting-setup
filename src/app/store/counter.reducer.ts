import { createReducer, on } from '@ngrx/store';
import { increment, incrementByValue } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(incrementByValue, (state, action) => {
    return state + action.value
  })
);

// ! Alternative of creating the reducers.
// export function counterReducer(state = initialState) {
//   return state;
// }
