import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  decrementByValue,
  incrementByValue,
  init,
  set,
} from './counter.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  loadCount = createEffect(() => {
    return this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCount = localStorage.getItem('count');
        if (storedCount) {
          return of(set({ value: +storedCount }));
        } else {
          return of(set({ value: 0 }));
        }
      })
    );
  });

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(incrementByValue, decrementByValue),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}
