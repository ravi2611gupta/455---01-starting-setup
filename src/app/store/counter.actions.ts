import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

export const incrementByValue = createAction(
  '[Counter] IncrementByValue',
  props<{ value: number }>()
);
