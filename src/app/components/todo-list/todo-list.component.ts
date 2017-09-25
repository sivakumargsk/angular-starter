import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../app.common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() toggleTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeTodo: EventEmitter<number> = new EventEmitter<number>();
}
