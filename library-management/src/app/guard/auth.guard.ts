import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).isLoggedIn()) {

    inject(Router).navigate(['/login']); // go to login if not authenticated

    return false;

  }

  return true;
};


export const adminGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).isAdmin()) {

    inject(Router).navigate(['**']);

    return false;

  }

  return true;
};