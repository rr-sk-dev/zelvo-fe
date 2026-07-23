import { Component, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-create',
  imports: [],
  templateUrl: './tasks-create.html',
  styleUrl: './tasks-create.css',
})
export class TasksCreate {
  tasksService = inject(TasksService);

  createTask() {}

  cancel() {}
}
