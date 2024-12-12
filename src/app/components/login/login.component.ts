import { Component } from '@angular/core';
import { AuthStore } from '../../store/auth.store';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  email = '';

  constructor(private _authStore: AuthStore) {}

  onLogin() {
    const user = { id: 1, username: this.username, email: this.email };
    this._authStore.login(user); // Login aufrufen
    console.log('isLoggedIn:', this._authStore.isLoggedIn());
  }  
}