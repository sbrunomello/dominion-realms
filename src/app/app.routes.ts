import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { RegisterPage } from './register/register.page';
import { CityPage } from './city/city.page';
import { StatisticsPage } from './statistics/statistics.page';
import { FactionPage } from './faction/faction.page';
import { DominionsPage } from './dominions/dominions.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'register', component: RegisterPage },
  { path: 'city', component: CityPage }, 
  { path: 'statistics', component: StatisticsPage }, 
  { path: 'faction', component: FactionPage },
  { path: 'dominions', component: DominionsPage },
];
