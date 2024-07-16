import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GraphqlService } from '../services/graphql/graphql.service';
import { AutheticatedService } from '../services/autheticated.service';
import { catchError, map } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  const service = inject(AutheticatedService)
  const allRoles = route.data['roles'];
  
  return service.getRol(allRoles).pipe(
    map((roles:any) => roles)
  );
  // return true;
};
