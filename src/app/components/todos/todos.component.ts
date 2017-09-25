import { Component, OnInit } from '@angular/core';
import {
  Todo,
  VisibilityFilter,
  showTodosByVisibilityFilter
} from '../../app.common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  nextId = 1;
  todos: Todo[] = [];
  visibilityFilter: VisibilityFilter = 'ALL';
  pageIndex = 1;
  pageSize = 5;
  maxButtons = 5;

  addNewTodo(todoText: string) {
    const newTodo = {
      id: this.nextId,
      text: todoText,
      completed: false
    };
    this.todos = [...this.todos, newTodo];
    this.nextId += 1;
  }

  toggleTodo(todoId: number) {
    const oldTodos = this.todos;
    this.todos = oldTodos.map(
      todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  }

  removeTodo(todoId: number) {
    const oldTodos = this.todos;
    this.todos = oldTodos.filter(todo => todo.id !== todoId);
  }

  setVisibilityFilter(visibilityFilter: VisibilityFilter) {
    this.visibilityFilter = visibilityFilter;
  }

  setPageIndex(pageIndex: number) {
    this.pageIndex = pageIndex;
  }

  todosLengthByVisibilityFilter() {
    const filteredTodos = showTodosByVisibilityFilter(
      this.visibilityFilter,
      this.todos
    );
    return Math.ceil(filteredTodos.length / this.pageSize);
  }

  todosByVisibilityFilterAndPageIndex() {
    const filteredTodos = showTodosByVisibilityFilter(
      this.visibilityFilter,
      this.todos
    );
    const beginValue = (this.pageIndex - 1) * this.pageSize;
    const endValue = (this.pageIndex + this.pageSize) * this.pageSize;
    return filteredTodos.slice(beginValue, endValue);
  }
}
