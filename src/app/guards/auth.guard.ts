import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    console.log('Nicht eingeloggt. Weiterleitung zur Login-Seite.');
    router.navigate(['/login']);
    return false; // Zugriff verweigern
  }

  console.log('Eingeloggt. Zugriff erlaubt.');
  return true; // Zugriff erlauben
};