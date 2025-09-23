import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@shared/layout/layout').then(m => m.Layout),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'auth',
        loadComponent: () =>
          import('@pages/auth/auth-page').then(m => m.AuthPage)
      },
      {
        path: 'home',
        loadComponent: () =>
          import('@pages/home/home-page').then(m => m.HomePage)
      },
      {
        path: 'history',
        loadComponent: () =>
          import('@pages/history/history-page').then(m => m.HistoryPage)
      },
      {
        path: 'tracks',
        loadComponent: () =>
          import('@pages/tracks/tracks-page').then(m => m.TracksPage)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
