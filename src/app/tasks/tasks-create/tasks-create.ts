import { Component, inject, output, signal } from '@angular/core';
import { FormField, form, required, submit } from '@angular/forms/signals';
import { SegmentedSelect, SegmentOption } from '../../shared/segmented-select/segmented-select';
import { TasksService } from '../tasks.service';
import { TodoPriority } from '../todo.model';

const PRIORITY_OPTIONS: readonly SegmentOption<TodoPriority>[] = [
  { value: 'low', label: 'Low', activeClass: 'border-priority-low text-primary' },
  { value: 'medium', label: 'Medium', activeClass: 'border-priority-medium text-primary' },
  { value: 'high', label: 'High', activeClass: 'border-priority-high text-primary' },
];

@Component({
  selector: 'app-tasks-create',
  imports: [FormField, SegmentedSelect],
  templateUrl: './tasks-create.html',
  styleUrl: './tasks-create.css',
})
export class TasksCreate {
  private readonly tasksService = inject(TasksService);

  readonly close = output<void>();

  protected readonly priorityOptions = PRIORITY_OPTIONS;

  protected readonly model = signal({
    title: '',
    description: '',
    priority: 'medium' as TodoPriority,
  });

  protected readonly taskForm = form(this.model, (path) => {
    required(path.title, { message: 'Title is required' });
  });

  protected createTask(): void {
    submit(this.taskForm, async () => {
      this.tasksService.createTask(this.model());
      this.close.emit();
    });
  }

  protected cancel(): void {
    this.close.emit();
  }
}
