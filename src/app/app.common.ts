export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type VisibilityFilter = 'ALL' | 'ACTIVE' | 'COMPLETED';

export const showTodosByVisibilityFilter = (
  visibilityFilter: string,
  todos: Todo[]
): Todo[] => {
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
