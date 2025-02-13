import { Action, createAction, props } from '@ngrx/store';

export const INCREMENT_BY_VALUE = '[Counter] IncrementByValue';
export const INCREMENT = '[Counter] Increment';

export const increment = createAction(INCREMENT);

export const incrementByValue = createAction(
  INCREMENT_BY_VALUE,
  props<{ value: number }>()
);

// export class IncrementAction implements Action {
//   readonly type: string = INCREMENT_BY_VALUE;

//   //   constructor(payload: { value: number }) {}
//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;
