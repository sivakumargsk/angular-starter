import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoInterface } from '../../todos-interface';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.css']
})
export class TodoRowComponent {
  @Input() todo: TodoInterface;
  @Output() toggleTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeTodo: EventEmitter<number> = new EventEmitter<number>();
}
