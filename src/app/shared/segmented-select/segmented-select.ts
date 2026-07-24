import { Component, input, model, output } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

export interface SegmentOption<T> {
  value: T;
  label: string;
  activeClass: string;
}

let nextGroupId = 0;

@Component({
  selector: 'app-segmented-select',
  templateUrl: './segmented-select.html',
  styleUrl: './segmented-select.css',
})
export class SegmentedSelect<T> implements FormValueControl<T> {
  readonly legend = input.required<string>();
  readonly options = input.required<readonly SegmentOption<T>[]>();

  /** Bound by the `[formField]` directive to the field's value. */
  readonly value = model.required<T>();
  /** Bound by the `[formField]` directive; also toggles the native fieldset. */
  readonly disabled = input(false);
  /** Emitted on blur so the field can be marked as touched. */
  readonly touch = output<void>();

  protected readonly groupName = `segmented-select-${nextGroupId++}`;

  protected select(value: T): void {
    this.value.set(value);
  }
}
