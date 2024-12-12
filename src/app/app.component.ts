import { Component } from '@angular/core';
import { AuthStore } from './store/auth.store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    NgIf,
    LoginComponent,
    RouterModule,
    SidenavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public authStore: AuthStore) {}

  ngOnInit() {
    console.log('isLoggedIn:', this.authStore.isLoggedIn());
  }
}