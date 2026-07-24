import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dot',
  template: '',
  styleUrl: './dot.css',
  host: {
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
    '[style.background-color]': 'color()',
  },
})
export class Dot {
  readonly color = input('var(--text-muted)');
  readonly size = input(8);
}
