import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { first, map, skip, tap } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { User } from '../../../features/dashboard/courses/models';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../store/auth/auth.selectors';

export const adminGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService);
   const router = inject(Router);

   const store = inject(Store);

   return store
   .select(selectAuthUser)
   .pipe(
     map((authUser) =>
       authUser?.role !== 'ADMIN'
         ? router.createUrlTree(['dashboard', 'home'])
         : true
     )
   );
};
