import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count = 0;

  @Output() counterChange: EventEmitter<number> = new EventEmitter();

  onInputChange(value: string) {
    const newValue = parseInt(value, 10);
    if (newValue) {
      this.count = newValue;
      this.counterChange.emit(this.count);
    } else {
      this.count = 0;
      this.counterChange.emit(0);
    }
  }

  increment() {
    this.count += 1;
    this.counterChange.emit(this.count);
  }

  decrement() {
    this.count -= 1;
    this.counterChange.emit(this.count);
  }
}
