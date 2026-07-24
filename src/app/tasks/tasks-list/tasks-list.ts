import { Component, computed, inject } from '@angular/core';
import { DashedCircle } from '../../../shared/dashed-circle/dashed-circle';
import { Dot } from '../../shared/dot/dot';
import { TasksCard } from '../tasks-card/tasks-card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [DashedCircle, Dot, TasksCard],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  private tasksService = inject(TasksService);

  private readonly tasks = this.tasksService.tasks;

  protected readonly hasTasks = computed(() => this.tasks().length > 0);

  protected readonly groups = computed(() => {
    const tasks = this.tasks();

    return [
      {
        status: 'todo',
        label: 'TO DO',
        color: 'var(--accent)',
        tasks: tasks.filter((t) => t.status === 'todo'),
      },
      {
        status: 'in-progress',
        label: 'IN PROGRESS',
        color: 'var(--status-in-progress)',
        tasks: tasks.filter((t) => t.status === 'in-progress'),
      },
      {
        status: 'done',
        label: 'DONE',
        color: 'var(--text-muted)',
        tasks: tasks.filter((t) => t.status === 'done'),
      },
    ];
  });
}
