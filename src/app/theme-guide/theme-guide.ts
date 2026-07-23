import { Component, afterNextRender, signal } from '@angular/core';

interface Swatch {
  name: string;
  /** Semantic CSS custom property this swatch documents; its value is read live. */
  token: string;
  /** Tailwind bg utility generated from the same token. */
  swatchClass: string;
}

interface TypeSample {
  text: string;
  /** Named text-style utility from typography.css. */
  typeClass: string;
  toneClass: string;
}

const CORE_COLORS: readonly Swatch[] = [
  { name: 'Background', token: '--background', swatchClass: 'bg-background' },
  { name: 'Card', token: '--card', swatchClass: 'bg-card' },
  { name: 'Field / Row', token: '--field', swatchClass: 'bg-field' },
  { name: 'Border', token: '--border', swatchClass: 'bg-border' },
  { name: 'Accent (amber)', token: '--accent', swatchClass: 'bg-accent' },
  { name: 'Text primary', token: '--text-primary', swatchClass: 'bg-primary' },
  { name: 'Text secondary', token: '--text-secondary', swatchClass: 'bg-secondary' },
  { name: 'Text muted', token: '--text-muted', swatchClass: 'bg-muted' },
];

const SEMANTIC_COLORS: readonly Swatch[] = [
  { name: 'High priority', token: '--priority-high', swatchClass: 'bg-priority-high' },
  { name: 'Medium priority', token: '--priority-medium', swatchClass: 'bg-priority-medium' },
  { name: 'Low priority', token: '--priority-low', swatchClass: 'bg-priority-low' },
  { name: 'In progress', token: '--status-in-progress', swatchClass: 'bg-status-in-progress' },
  { name: 'Done', token: '--status-done', swatchClass: 'bg-status-done' },
];

const TYPE_SAMPLES: readonly TypeSample[] = [
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

@Component({
  selector: 'app-theme-guide',
  templateUrl: './theme-guide.html',
})
export class ThemeGuide {
  readonly coreColors = CORE_COLORS;
  readonly semanticColors = SEMANTIC_COLORS;
  readonly typeSamples = TYPE_SAMPLES;

  /** Live resolved value of each token, keyed by custom-property name. */
  protected readonly resolvedValues = signal<Record<string, string>>({});

  constructor() {
    // The running CSS is the single source of truth: resolve each token's
    // value from :root once the DOM exists (browser only — never on the server).
    afterNextRender(() => {
      const styles = getComputedStyle(document.documentElement);
      const resolved: Record<string, string> = {};
      for (const { token } of [...CORE_COLORS, ...SEMANTIC_COLORS]) {
        resolved[token] = styles.getPropertyValue(token).trim();
      }
      this.resolvedValues.set(resolved);
    });
  }
}
