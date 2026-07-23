import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeGuide } from './theme-guide';

describe('ThemeGuide', () => {
  let fixture: ComponentFixture<ThemeGuide>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(ThemeGuide);
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the page heading', async () => {
    await fixture.whenStable();
    expect(el.querySelector('h1')?.textContent).toContain('Theme guide');
  });

  it('should render a swatch for every core and semantic color', async () => {
    await fixture.whenStable();
    const { coreColors, semanticColors } = fixture.componentInstance;
    const swatches = el.querySelectorAll('[class*="rounded-card"]');
    expect(swatches.length).toBe(coreColors.length + semanticColors.length);
  });

  it('should render the text of every type sample', async () => {
    await fixture.whenStable();
    for (const sample of fixture.componentInstance.typeSamples) {
      expect(el.textContent).toContain(sample.text);
    }
  });
});
