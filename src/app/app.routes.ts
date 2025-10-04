import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from '@pages/home/home';
import { Tracks } from '@pages/tracks/tracks';
import { Favorites } from '@pages/favorites/favorites';
import { History } from '@pages/history/history';

export const routes: Routes = [
    {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'tracks', component: Tracks },
      { path: 'favorites', component: Favorites },
      { path: 'history', component: History }
    ]
  }
];
