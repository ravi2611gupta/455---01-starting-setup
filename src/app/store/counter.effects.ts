import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrementByValue, incrementByValue } from './counter.actions';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(incrementByValue, decrementByValue),
        tap((action) => {
          console.log(action);
          localStorage.setItem('count', action.value.toString());
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
