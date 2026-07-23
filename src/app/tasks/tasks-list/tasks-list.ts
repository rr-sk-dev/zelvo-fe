import { Component, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  tasksService = inject(TasksService);
}
