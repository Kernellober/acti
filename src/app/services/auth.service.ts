import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Prüfe, ob der Benutzer eingeloggt ist
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Login-Methode: Speichert Token und Benutzerdaten
  login(token: string, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  // Logout-Methode: Löscht Token und Benutzerdaten
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  // Methode zum Abrufen des Benutzernamens
  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}