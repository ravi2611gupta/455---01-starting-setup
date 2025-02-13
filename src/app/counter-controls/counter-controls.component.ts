import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrementByValue,
  // IncrementAction,
  incrementByValue,
} from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    // this.store.dispatch(increment());
    this.store.dispatch(incrementByValue({ value: 3 }));
    // this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    this.store.dispatch(decrementByValue({ value: 3 }));
  }
}
