import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { RegisterPage } from './register/register.page';
import { GamePage } from './game/game.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'register', component: RegisterPage },
  { path: 'game', component: GamePage },
];
