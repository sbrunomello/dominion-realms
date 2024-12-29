import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { auth, googleProvider, db } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <ion-content>
      <div class="login-container">
        <ion-button expand="full" (click)="loginWithGoogle()">Entrar com Google</ion-button>
      </div>
    </ion-content>
  `,
  styles: [
    `
      .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    `,
  ],
  standalone: true,
  imports: [IonicModule],
})
export class LoginPage {
  constructor(private router: Router) {}

  async loginWithGoogle() {
    try {
      // Autenticação com Google
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Verifica se o usuário já existe no Firestore
      const userRef = doc(db, 'users', user.uid);
      const userSnapshot = await getDoc(userRef);

      if (!userSnapshot.exists()) {
        // Salva os dados do novo usuário
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
        });
      }

      console.log('Login bem-sucedido:', user);
      
      // Navega para a próxima tela (por exemplo, a tela principal)
      this.router.navigate(['/tabs/global-map']);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }
}
