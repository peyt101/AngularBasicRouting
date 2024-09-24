// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Indicates that this component is standalone
  imports: [CommonModule, RouterModule], // Imports needed modules for this component
  templateUrl: './login.component.html', // Reference to the component's template
})
export class LoginComponent {}
