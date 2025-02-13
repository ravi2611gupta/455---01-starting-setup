import { Action, createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

// export const incrementByValue = createAction(
//   '[Counter] IncrementByValue',
//   props<{ value: number }>()
// );
export const INCREMENT_BY_VALUE = '[Counter] IncrementByValue'
export class IncrementAction implements Action {
  readonly type: string = INCREMENT_BY_VALUE;

  //   constructor(payload: { value: number }) {}
  constructor(public value: number) {}
}

export type CounterActions = IncrementAction;