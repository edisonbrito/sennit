import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'home',canActivate: [AuthService], component: HomePageComponent },
    { path: 'signup', component: SignupPageComponent },    
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);