import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../app.common';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.css']
})
export class TodoRowComponent {
  @Input() todo: Todo;
  @Output() toggleTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeTodo: EventEmitter<number> = new EventEmitter<number>();
}
