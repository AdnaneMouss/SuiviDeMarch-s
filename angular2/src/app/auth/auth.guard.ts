import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthService} from "../service/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Si l'utilisateur est authentifié, permettre l'accès
    }

    // Sinon, rediriger vers la page de login
    this.router.navigate(['/login']);
    return false;
  }
}
