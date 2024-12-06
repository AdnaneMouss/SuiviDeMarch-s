import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../service/jwt.service'; // Ensure this path and service are correct.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Remove `undefined` as it will be initialized in `ngOnInit`.

  constructor(
    private service: JwtService, // Ensure `JwtService` has the @Injectable() decorator.
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Use an array for multiple validators.
      password: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      alert('Please fill all required fields.');
      return;
    }

    this.service.login(this.loginForm.value).subscribe(
      (response: { jwt: string }) => { // Define `response` type.
        console.log(response);
        if (response && response.jwt) {
          alert('Hello, Your token is ' + response.jwt);
          localStorage.setItem('jwt', response.jwt);
          this.router.navigateByUrl('/dashboard');
        }
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please try again.');
      }
    );
  }
}
