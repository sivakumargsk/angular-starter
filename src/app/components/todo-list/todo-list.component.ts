import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoInterface } from '../../todos-interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: TodoInterface[] = [];
  @Output() toggleTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeTodo: EventEmitter<number> = new EventEmitter<number>();
}
