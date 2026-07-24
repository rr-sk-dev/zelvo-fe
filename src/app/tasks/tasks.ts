import { Component, ElementRef, effect, signal, viewChild } from '@angular/core';
import { DashedCircle } from '../shared/dashed-circle/dashed-circle';
import { TasksCounter } from './tasks-counter/tasks-counter';
import { TasksCreate } from './tasks-create/tasks-create';
import { TasksList } from './tasks-list/tasks-list';

@Component({
  selector: 'app-tasks',
  imports: [TasksCounter, TasksList, TasksCreate, DashedCircle],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  protected readonly showCreate = signal(false);
  private readonly createDialog = viewChild<ElementRef<HTMLDialogElement>>('createDialog');

  constructor() {
    effect(() => {
      const dialog = this.createDialog()?.nativeElement;
      if (!dialog) {
        return;
      }

      if (this.showCreate() && !dialog.open) {
        dialog.showModal();
      } else if (!this.showCreate() && dialog.open) {
        dialog.close();
      }
    });
  }

  addTask(): void {
    this.showCreate.set(true);
  }

  closeCreate(): void {
    this.showCreate.set(false);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.createDialog()?.nativeElement) {
      this.closeCreate();
    }
  }
}
