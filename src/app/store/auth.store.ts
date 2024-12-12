import { Injectable, signal } from '@angular/core';

export interface User {
  id: number;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private _isLoggedIn = signal<boolean>(false);
  private _user = signal<User | null>(null);

  // Getter
  isLoggedIn() {
    return this._isLoggedIn();
  }

  user() {
    return this._user();
  }

  // Login-Methode
  login(userData: User) {
    console.log('Login erfolgreich:', userData);
    this._user.set(userData);
    this._isLoggedIn.set(true);
  }

  // Logout-Methode
  logout() {
    console.log('Logout erfolgreich');
    this._user.set(null);
    this._isLoggedIn.set(false);
  }
}