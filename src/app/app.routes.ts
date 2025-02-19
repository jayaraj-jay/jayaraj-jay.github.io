import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/portfolio/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    // {
    //     path: '',
    //     component: MainLayoutComponent,
    //     canActivate: [authGuard],  // Protect all routes inside this layout
    //     children: [
    //         { path: 'dashboard', component: DashboardComponent },  // Dashboard inside layout
    //         { path: 'profile', loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent) },
    //         { path: 'settings', loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) },
    //     ]
    // },
];
