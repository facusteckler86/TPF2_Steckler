import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { first, map, skip, tap } from 'rxjs';
import { AuthService } from '../../service/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return AuthService.authUser$.pipe(
    map((authUser) =>
      authUser?.role !== 'ADMIN'
        ? router.createUrlTree(['dashboard', 'home'])
        : true
    )
  );
};
