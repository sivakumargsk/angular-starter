import { TodoInterface, VisibilityFilterType } from './todos-interface';

export const showTodosByVisibilityFilter = (
  visibilityFilter: VisibilityFilterType,
  todos: TodoInterface[]
): TodoInterface[] => {
  switch (visibilityFilter) {
    case 'ALL':
      return todos;
    case 'ACTIVE':
      return todos.filter(todo => todo.completed === false);
    case 'COMPLETED':
      return todos.filter(todo => todo.completed === true);
    default:
      return [];
  }
};
