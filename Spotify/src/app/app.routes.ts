import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/login-page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home-page').then(m => m.HomePage)
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./pages/history/history-page').then(m => m.HistoryPage)
  },
  {
    path: 'tracks',
    loadComponent: () =>
      import('./pages/tracks/tracks-page').then(m => m.TracksPage)
  },

  { path: '**', redirectTo: 'auth' }
];
