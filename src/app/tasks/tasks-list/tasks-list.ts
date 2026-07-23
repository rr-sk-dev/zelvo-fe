import { Component, inject } from '@angular/core';
import { DashedCircle } from '../../../shared/dashed-circle/dashed-circle';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [DashedCircle],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  tasksService = inject(TasksService);
}
