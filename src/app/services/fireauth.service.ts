import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, sendPasswordResetEmail
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  user: User | null = null;

  constructor(
    private auth: Auth
  ) {}

  // listen to auth state changes
  private listenToAuthStateChanges(): void {
    authState(this.auth).subscribe((user: User | null) => {
      if (user) {
        // User is signed in
      } else {
        // User is signed out
      }
    });
  }

  // sign up with email and password
  public async signUpWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    const cred = await createUserWithEmailAndPassword(this.auth, email, password);
    if (cred?.user) {
      this.user = cred.user;
    }
    return cred;
  }

  // sign in with email and password
  public signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // sign out
  public async signOut(): Promise<void> {
    await this.auth.signOut();
  }

  // send password reset email
  public async sendPasswordResetEmail(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }

}
