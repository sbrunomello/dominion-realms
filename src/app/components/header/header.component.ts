import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class HeaderComponent {
  player = {
    name: 'Lord Capivara',
    avatar: '/assets/avatar.jpg',
    level: 10,
    power: 3560,
    gold: 1500,
    token: 250,
  };

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
