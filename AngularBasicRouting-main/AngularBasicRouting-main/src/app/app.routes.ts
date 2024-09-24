// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '**', redirectTo: 'landing' } // Handles any unknown routes
];
