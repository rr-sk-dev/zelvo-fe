import { Component, inject, output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-create',
  imports: [],
  templateUrl: './tasks-create.html',
  styleUrl: './tasks-create.css',
})
export class TasksCreate {
  tasksService = inject(TasksService);

  readonly close = output<void>();

  createTask() {
    this.close.emit();
  }

  cancel() {
    this.close.emit();
  }
}
