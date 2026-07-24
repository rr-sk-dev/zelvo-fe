import { Component, computed, inject } from '@angular/core';
import { DashedCircle } from '../../shared/dashed-circle/dashed-circle';
import { Dot } from '../../shared/dot/dot';
import { TasksCard } from '../tasks-card/tasks-card';
import { TasksService } from '../tasks.service';
import { Todo, TodoStatus } from '../todo.model';

type TaskGroup = {
  status: TodoStatus;
  label: string;
  tasks: Todo[];
};

@Component({
  selector: 'app-tasks-list',
  imports: [DashedCircle, Dot, TasksCard],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  private readonly tasksService = inject(TasksService);

  private readonly tasks = this.tasksService.tasks;

  protected readonly hasTasks = computed(() => this.tasks().length > 0);

  protected readonly groups = computed<TaskGroup[]>(() => {
    const tasks = this.tasks();

    return [
      { status: 'todo', label: 'TO DO', tasks: tasks.filter((t) => t.status === 'todo') },
      {
        status: 'in-progress',
        label: 'IN PROGRESS',
        tasks: tasks.filter((t) => t.status === 'in-progress'),
      },
      { status: 'done', label: 'DONE', tasks: tasks.filter((t) => t.status === 'done') },
    ];
  });
}
