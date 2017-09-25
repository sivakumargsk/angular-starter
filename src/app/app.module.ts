import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoRowComponent } from './components/todo-row/todo-row.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFotterComponent } from './components/todo-fotter/todo-fotter.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoRowComponent,
    TodoListComponent,
    TodoFotterComponent,
    PaginationComponent,
    TodosComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
