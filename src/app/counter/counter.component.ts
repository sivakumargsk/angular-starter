import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count = 0;

  @Output() change: EventEmitter<number> = new EventEmitter();

  increment() {
    this.count += 1;
    this.change.emit(this.count);
  }

  decrement() {
    this.count -= 1;
    this.change.emit(this.count);
  }
}
