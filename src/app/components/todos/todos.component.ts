import { Component, OnInit } from '@angular/core';
import { TodoInterface, VisibilityFilterType } from '../../todos-interface';
import { showTodosByVisibilityFilter } from '../../app.common';
import { List } from 'immutable';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  nextId = 1;
  todos: List<TodoInterface> = List([]);
  visibilityFilter: VisibilityFilterType = 'ALL';
  pageIndex = 1;
  pageSize = 5;
  maxButtons = 5;

  addNewTodo(todoText: string) {
    const newTodo = {
      id: this.nextId,
      text: todoText,
      completed: false
    };
    this.todos = this.todos.push(newTodo);
    this.nextId += 1;
  }

  toggleTodo(todoId: number) {
    this.todos = this.todos
      .map(
        todo =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
      .toList();
  }

  removeTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId).toList();
  }

  setVisibilityFilter(visibilityFilter: VisibilityFilterType) {
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
    return Math.ceil(filteredTodos.count() / this.pageSize);
  }

  todosByVisibilityFilterAndPageIndex() {
    const filteredTodos = showTodosByVisibilityFilter(
      this.visibilityFilter,
      this.todos
    );
    const beginValue = (this.pageIndex - 1) * this.pageSize;
    const endValue = this.pageIndex + this.pageSize;
    return filteredTodos.slice(beginValue, endValue);
  }
}
