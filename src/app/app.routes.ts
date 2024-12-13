import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { TeamlerComponent } from './components/teamler/teamler.component';
import { PlayerCountComponent } from './components/player-count/player-count.component';
import { ArrivalsComponent } from './components/arrivals/arrivals.component';
import { SupportCasesComponent } from './components/support-cases/support-cases.component';
import { AnalysesComponent } from './components/analyses/analyses.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'teamler', component: TeamlerComponent, canActivate: [authGuard], data: { archived: false } },
  { path: 'ehemalige-teamler', component: TeamlerComponent, canActivate: [authGuard], data: { archived: true } },
  { path: 'peak-player-count', component: PlayerCountComponent, canActivate: [authGuard], data: { aggregate: "peak" } },
  { path: 'avg-player-count', component: PlayerCountComponent, canActivate: [authGuard], data: { aggregate: "avg" } },
  { path: 'arrivals', component: ArrivalsComponent, canActivate: [authGuard] },
  { path: 'support-cases', component: SupportCasesComponent, canActivate: [authGuard] },
  { path: 'analyses', component: AnalysesComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];