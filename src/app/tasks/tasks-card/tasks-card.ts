import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { Checkbox } from '../../shared/checkbox/checkbox';
import { Dot } from '../../shared/dot/dot';
import { Todo } from '../todo.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-card',
  imports: [Checkbox, Dot, DatePipe],
  templateUrl: './tasks-card.html',
  styleUrl: './tasks-card.css',
  host: {
    '[attr.data-priority]': 'todo().priority',
    '[attr.data-status]': 'todo().status',
  },
})
export class TasksCard {
  private readonly tasksService = inject(TasksService);

  readonly todo = input.required<Todo>();

  protected readonly done = computed(() => this.todo().status === 'done');
  protected readonly titleId = computed(() => `task-title-${this.todo().id}`);

  protected onToggleDone(done: boolean): void {
    done ? this.tasksService.complete(this.todo().id) : this.tasksService.reopen(this.todo().id);
  }
}
