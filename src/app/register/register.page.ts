import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegisterPage {
  playerName = '';
  selectedNation = '';

  nations = [
    { name: 'Romanos', bonus: 'Construção simultânea' },
    { name: 'Gauleses', bonus: 'Defesa extra' },
    { name: 'Teutões', bonus: 'Ataque poderoso' },
  ];

  constructor(private router: Router) {}

  register() {
    if (this.playerName && this.selectedNation) {
      // Mock de salvamento
      localStorage.setItem('playerName', this.playerName);
      localStorage.setItem('selectedNation', this.selectedNation);
      this.router.navigate(['/game']);
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
