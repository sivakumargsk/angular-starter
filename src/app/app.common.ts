import { TodoInterface, VisibilityFilterType } from './todos-interface';
import { List } from 'immutable';

export const showTodosByVisibilityFilter = (
  visibilityFilter: VisibilityFilterType,
  todos: List<TodoInterface>
): List<TodoInterface> => {
  switch (visibilityFilter) {
    case 'ALL':
      return todos;
    case 'ACTIVE':
      return todos.filter(todo => todo.completed === false).toList();
    case 'COMPLETED':
      return todos.filter(todo => todo.completed === true).toList();
    default:
      return todos;
  }
};
