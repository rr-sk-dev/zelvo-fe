import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dot',
  template: '',
  styleUrl: './dot.css',
  host: {
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
  },
})
export class Dot {
  readonly size = input(8);
}
