import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutheticatedService } from '../services/autheticated.service';

export const autheticatedGuard: CanActivateFn = (route, state) => {
  const authenticated = inject(AutheticatedService);
  const router = inject(Router);
  if (authenticated.isAutheticated()) {
    return true;
  }else{
    router.navigate(['/auth/login']);
    return false;
  }
};
