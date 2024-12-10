import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/users/login'; // URL de l'API pour l'authentification

  constructor(private http: HttpClient, private router: Router) {}

  // Fonction pour se connecter
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password });
  }

  // Fonction pour vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user'); // Vérifie si l'utilisateur est stocké dans le localStorage
  }

  // Fonction pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem('user'); // Supprime les informations de l'utilisateur du localStorage
    this.router.navigate(['/login']); // Redirige vers la page de login
  }

  // Fonction pour récupérer les données de l'utilisateur
  getUser(): any {
    return JSON.parse(localStorage.getItem('user')!); // Récupère l'utilisateur depuis le localStorage
  }
}

