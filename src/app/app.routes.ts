import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {path: 'auth', 
    loadComponent: () => import('@pages/auth/auth').then(m => m.Auth)},
    {
    path: '',
    component: Layout, // tu layout principal con sidebar + router
    children: [
      { path: 'home', loadComponent: () => import('@pages/home/home').then(m => m.Home) },
      { path: 'favorites', loadComponent: () => import('@pages/favorites/favorites').then(m => m.Favorites) },
      { path: 'tracks', loadComponent: () => import('@pages/tracks/tracks').then(m => m.Tracks) },
      { path: 'history', loadComponent: () => import('@pages/history/history').then(m => m.History) }
    ]
  }
];
