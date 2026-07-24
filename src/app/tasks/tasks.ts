import { Component, signal } from '@angular/core';
import { DashedCircle } from '../../shared/dashed-circle/dashed-circle';
import { TasksCounter } from './tasks-counter/tasks-counter';
import { TasksCreate } from './tasks-create/tasks-create';
import { TasksList } from './tasks-list/tasks-list';

type TodoStatus = 'todo' | 'in-progress' | 'done';

type TodoPriority = 'low' | 'medium' | 'high';

type TodoNote = {
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

@Component({
  selector: 'app-tasks',
  imports: [TasksCounter, TasksList, TasksCreate, DashedCircle],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  protected readonly showCreate = signal(false);

  addTask() {
    this.showCreate.set(true);
  }

  closeCreate() {
    this.showCreate.set(false);
  }
}
