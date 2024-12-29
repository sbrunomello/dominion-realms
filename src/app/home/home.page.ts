import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
