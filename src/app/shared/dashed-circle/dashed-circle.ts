import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashed-circle',
  template: '<ng-content />',
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: 2px dashed var(--text-muted);
      border-radius: var(--radius-pill);
    }
  `,
  host: {
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
  },
})
export class DashedCircle {
  readonly size = input(40);
}
