import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AuthService} from "../service/login.service";

@Component({
  selector: 'app-logintemp',
  templateUrl: './login.component.html',
  styleUrls: ['../CSS/styles.scss'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Fonction de soumission du formulaire de login
  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Stocker les données de l'utilisateur dans localStorage
        localStorage.setItem('user', JSON.stringify(response));

        // Vérifier le type de l'utilisateur et rediriger en conséquence
        const userType = response.type;

        if (userType === 'admin') {
          this.router.navigate(['/admin-dashboard']);  // Rediriger vers le tableau de bord admin
        } else if (userType === 'chef de projet') {
          this.router.navigate(['/project-leader-dashboard']);  // Rediriger vers le tableau de bord chef de projet
        } else if (userType === 'employee') {
          this.router.navigate(['/employee-dashboard']);  // Rediriger vers le tableau de bord employé
        } else {
          this.router.navigate(['/dashboard']);  // Rediriger vers un tableau de bord général
        }
      },
      (error) => {
        // Gérer les erreurs de connexion
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}
