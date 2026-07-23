import { Component, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-counter',
  imports: [],
  templateUrl: './tasks-counter.html',
  styleUrl: './tasks-counter.css',
})
export class TasksCounter {
  tasksService = inject(TasksService);
}
