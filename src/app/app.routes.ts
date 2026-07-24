import { isDevMode } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks').then((m) => m.Tasks),
  },
  {
    path: 'theme',
    canMatch: [() => isDevMode()],
    loadComponent: () => import('./theme-guide/theme-guide').then((m) => m.ThemeGuide),
  },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found').then((m) => m.PageNotFound),
  },
];
