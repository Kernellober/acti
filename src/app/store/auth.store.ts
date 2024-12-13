import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private _router = inject(Router);

  private _isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));
  private _username = signal<string | null>(localStorage.getItem('username'));

  // Getter
  isLoggedIn = () => this._isLoggedIn();
  username = () => this._username();

  // Login-Methode
  login(token: string, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    this._isLoggedIn.set(true);
    this._username.set(username);

    // Nach dem Login zur Start-Seite navigieren
    this._router.navigate(['']);
  }

  // Logout-Methode
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this._isLoggedIn.set(false);
    this._username.set(null);

    // Nach dem Logout zur Login-Seite navigieren
    this._router.navigate(['/login']);
  }
}