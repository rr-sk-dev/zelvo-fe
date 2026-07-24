import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {
  readonly checked = model(false);
  readonly color = input('var(--text-secondary)');
  readonly size = input(28);

  protected onChange(event: Event): void {
    this.checked.set((event.target as HTMLInputElement).checked);
  }
}
