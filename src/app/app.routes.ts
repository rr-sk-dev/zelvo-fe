import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'theme',
    loadComponent: () => import('./theme-guide/theme-guide').then((m) => m.ThemeGuide),
  },
  { path: '', redirectTo: 'theme', pathMatch: 'full' },
];
