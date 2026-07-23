import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SegmentedSelect),
      multi: true,
    },
  ],
})
export class SegmentedSelect<T> implements ControlValueAccessor {
  readonly legend = input.required<string>();
  readonly options = input.required<readonly SegmentOption<T>[]>();

  protected readonly value = signal<T | null>(null);
  protected readonly disabled = signal(false);
  protected readonly groupName = `segmented-select-${nextGroupId++}`;

  protected onChange: (value: T) => void = () => {};
  protected onTouched: () => void = () => {};

  writeValue(value: T): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected select(value: T): void {
    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }
}
