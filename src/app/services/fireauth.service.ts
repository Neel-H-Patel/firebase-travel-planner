import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(
    private auth: Auth
  ) {

    // listen to auth state changes

    // sign in with email and password

    // sign up with email and password

    // sign out

    // send password reset email

  }
}
