import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addNewTodo: EventEmitter<string> = new EventEmitter<string>();

  onSubmit(formData) {
    const todoText = formData.value.todoText;
    this.addNewTodo.emit(todoText);
    formData.reset();
  }
}
