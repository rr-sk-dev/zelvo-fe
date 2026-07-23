import { Component, computed, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-counter',
  imports: [],
  templateUrl: './tasks-counter.html',
  styleUrl: './tasks-counter.css',
})
export class TasksCounter {
  private readonly tasksService = inject(TasksService);

  protected readonly label = computed(() => {
    const count = this.tasksService.tasks().length;
    return `${count} ${count === 1 ? 'task' : 'tasks'}`;
  });
}
