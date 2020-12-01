import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogGuard implements CanActivate {

  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Esto no es una buena validación para validar si un usuario esta auth.
    console.log(localStorage.getItem(environment.localStorageToken))
    const token = localStorage.getItem(environment.localStorageToken)
    if (token === null) {
      this.route.navigateByUrl("login")
      return false
    }
    return true
  }





}
