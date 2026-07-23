import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks').then((m) => m.Tasks),
  },
  {
    path: 'theme',
    loadComponent: () => import('./theme-guide/theme-guide').then((m) => m.ThemeGuide),
  },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];
