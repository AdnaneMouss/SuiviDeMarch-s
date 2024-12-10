import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<any>('http://localhost:8080/api/auth/login', this.loginData).subscribe({
      next: (response) => {
        if (response.type === 'admin') {
          this.router.navigate(['/users']);
        } else if (response.type === 'manager') {
          this.router.navigate(['/manager']);
        } else if (response.type === 'client') {
          this.router.navigate(['/client']);
        } else {
          alert('Unknown user type');
        }
      },
      error: () => {
        alert('Invalid email or password');
      }
    });
  }
}
