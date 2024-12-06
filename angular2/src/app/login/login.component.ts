import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../service/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful');
        this.router.navigate(['/dashboard']); // Redirect after successful login
      },
      error: (error) => {
        this.loginError = 'Invalid email or password!';
        console.error('Login failed', error);
      }
    });
  }
}
