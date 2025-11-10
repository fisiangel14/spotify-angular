import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { sessionGuard } from './core/guards/session-guard';

export const routes: Routes = [
  {path: 'auth/login', 
    loadComponent: () => import('@pages/auth/login-page/login-page').then(m => m.LoginPage),
    // canActivate: [sessionGuard]
  },
  {
    path: '',
    component: Layout, // tu layout principal con sidebar + router
    canActivate: [sessionGuard],
    children: [
      { path: 'home', loadComponent: () => import('@pages/home/home').then(m => m.Home) },
      { path: 'favorites', loadComponent: () => import('@pages/favorites/favorites').then(m => m.Favorites) },
      { path: 'tracks', loadComponent: () => import('@pages/tracks/tracks').then(m => m.Tracks) },
      { path: 'history', loadComponent: () => import('@pages/history/history').then(m => m.History) },
    ]
  },
  { path: '**', redirectTo: 'tracks' }
];
