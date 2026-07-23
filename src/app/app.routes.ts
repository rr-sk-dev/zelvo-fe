import { Routes } from '@angular/router';
import { ThemeGuide } from './theme-guide/theme-guide';

export const routes: Routes = [
  { path: 'theme', component: ThemeGuide },
  { path: '', redirectTo: 'theme', pathMatch: 'full' },
];
