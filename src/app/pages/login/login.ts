import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  mode: 'login' | 'signup' | 'forgot' = 'login';

  constructor() {}
  
  //... other login methods...private afAuth: AngularFireAuth

  switchTo(mode: 'login' | 'signup' | 'forgot') {
    this.mode = mode;
  }

  loginWithGoogle() {
    // this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //   .then(res => {
    //     console.log('Google Login Success', res);
    //   })
    //   .catch(err => {
    //     console.error('Google Login Failed', err);
    //   });
  }
}
