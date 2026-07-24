import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SegmentedSelect, SegmentOption } from '../../../shared/segmented-select/segmented-select';
import { TasksService } from '../tasks.service';

export type Priority = 'low' | 'medium' | 'high';

const PRIORITY_OPTIONS: readonly SegmentOption<Priority>[] = [
  { value: 'low', label: 'Low', activeClass: 'border-priority-low text-primary' },
  { value: 'medium', label: 'Medium', activeClass: 'border-priority-medium text-primary' },
  { value: 'high', label: 'High', activeClass: 'border-priority-high text-primary' },
];

@Component({
  selector: 'app-tasks-create',
  imports: [ReactiveFormsModule, SegmentedSelect],
  templateUrl: './tasks-create.html',
  styleUrl: './tasks-create.css',
})
export class TasksCreate {
  tasksService = inject(TasksService);

  readonly close = output<void>();

  protected readonly priorityOptions = PRIORITY_OPTIONS;

  taskForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: Validators.required }),
    description: new FormControl(''),
    priority: new FormControl<Priority>('medium', { nonNullable: true }),
  });

  createTask() {
    this.close.emit();
  }

  cancel() {
    this.close.emit();
  }
}
