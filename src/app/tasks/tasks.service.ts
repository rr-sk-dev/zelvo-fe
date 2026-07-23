import { Service, signal } from '@angular/core';
import { Task } from './tasks';

@Service()
export class TasksService {
  tasks = signal<Task[]>([]);

  createTask(task: Task): void {
    this.tasks.set([...this.tasks(), task]);
  }
}
