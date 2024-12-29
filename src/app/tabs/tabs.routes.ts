import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'global-map',
        loadComponent: () =>
          import('../global-map/global-map.page').then((m) => m.GlobalMapPage),
      },
      {
        path: 'region-map',
        loadComponent: () =>
          import('../region-map/region-map.page').then((m) => m.RegionMapPage),
      },
      {
        path: 'city',
        loadComponent: () =>
          import('../city/city.page').then((m) => m.CityPage),
      },
      {
        path: '',
        redirectTo: '/tabs/global-map',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/global-map',
    pathMatch: 'full',
  },
];
