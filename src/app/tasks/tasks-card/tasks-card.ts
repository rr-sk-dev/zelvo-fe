import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Checkbox } from '../../shared/checkbox/checkbox';
import { Dot } from '../../shared/dot/dot';
import { Todo } from '../tasks';

const PRIORITY_COLOR = {
  high: 'var(--priority-high)',
  medium: 'var(--priority-medium)',
  low: 'var(--priority-low)',
} as const;

const CHECKBOX_COLOR = {
  todo: 'var(--text-secondary)',
  'in-progress': 'var(--accent)',
  done: 'var(--accent)',
} as const;

@Component({
  selector: 'app-tasks-card',
  imports: [Checkbox, Dot, DatePipe],
  templateUrl: './tasks-card.html',
  styleUrl: './tasks-card.css',
  host: {
    '[class.is-active]': "todo().status === 'in-progress'",
  },
})
export class TasksCard {
  readonly todo = input.required<Todo>();

  protected readonly done = computed(() => this.todo().status === 'done');
  protected readonly checkboxColor = computed(() => CHECKBOX_COLOR[this.todo().status]);
  protected readonly priorityColor = computed(() => PRIORITY_COLOR[this.todo().priority]);
}
