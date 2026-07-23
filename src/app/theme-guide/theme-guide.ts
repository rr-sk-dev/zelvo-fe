import { Component } from '@angular/core';

interface Swatch {
  name: string;
  value: string;
  /** Tailwind bg utility generated from a semantic color token. */
  swatchClass: string;
}

interface TypeSample {
  text: string;
  /** Named text-style utility from typography.css. */
  typeClass: string;
  toneClass: string;
}

@Component({
  selector: 'app-theme-guide',
  templateUrl: './theme-guide.html',
})
export class ThemeGuide {
  readonly coreColors: Swatch[] = [
    { name: 'Background', value: '#0D0B16', swatchClass: 'bg-background' },
    { name: 'Card', value: '#15131F', swatchClass: 'bg-card' },
    { name: 'Field / Row', value: '#1C1830', swatchClass: 'bg-field' },
    { name: 'Border', value: '#251F38', swatchClass: 'bg-border' },
    { name: 'Accent (amber)', value: 'oklch(.72 .16 75)', swatchClass: 'bg-accent' },
    { name: 'Text primary', value: '#F0EEF8', swatchClass: 'bg-primary' },
    { name: 'Text secondary', value: '#A49EC2', swatchClass: 'bg-secondary' },
    { name: 'Text muted', value: '#6E6A85', swatchClass: 'bg-muted' },
  ];

  readonly semanticColors: Swatch[] = [
    { name: 'High priority', value: 'oklch(.72 .16 25)', swatchClass: 'bg-priority-high' },
    { name: 'Medium priority', value: 'oklch(.72 .16 75)', swatchClass: 'bg-priority-medium' },
    { name: 'Low priority', value: 'oklch(.72 .16 160)', swatchClass: 'bg-priority-low' },
    { name: 'In progress', value: 'oklch(.72 .16 250)', swatchClass: 'bg-status-in-progress' },
    { name: 'Done', value: '#3D3855', swatchClass: 'bg-status-done' },
  ];

  readonly typeSamples: TypeSample[] = [
    {
      text: 'Page title — Space Grotesk 700 / 26',
      typeClass: 'type-page-title',
      toneClass: 'text-primary',
    },
    {
      text: 'Modal title — Space Grotesk 700 / 19',
      typeClass: 'type-modal-title',
      toneClass: 'text-primary',
    },
    {
      text: 'Task title — System 500 / 15',
      typeClass: 'type-task-title',
      toneClass: 'text-primary',
    },
    {
      text: 'Body / description — System 400 / 13.5',
      typeClass: 'type-body',
      toneClass: 'text-secondary',
    },
    {
      text: 'Section label — System 600 / 12 / +1',
      typeClass: 'type-section-label',
      toneClass: 'text-secondary',
    },
    { text: 'Meta / dates — System 400 / 11.5', typeClass: 'type-meta', toneClass: 'text-muted' },
  ];
}
