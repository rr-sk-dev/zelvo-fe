export type TodoStatus = 'todo' | 'in-progress' | 'done';

export type TodoPriority = 'low' | 'medium' | 'high';

export type TodoNote = {
  id: string;
  text: string;
  createdAt: string;
};

export type Todo = {
  id: string;
  title: string;
  description?: string;
  priority: TodoPriority;
  status: TodoStatus;
  dueDate?: string;
  notes: TodoNote[];
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  previousStatus?: TodoStatus;
  deletedAt?: string;
};

export type CreateTodo = Pick<Todo, 'title' | 'description' | 'priority'>;
