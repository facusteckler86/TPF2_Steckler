import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from './courses/models';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/service/auth.service';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { selectAuthUser } from '../../core/store/auth/auth.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  showFiller = false;

  authUser$: Observable<User | null>;

  nombreEntorno = environment.envName;

  constructor(private authService: AuthService, private store: Store<RootState>) {
    //this.authUser$ = this.authService.authUser$.pipe(tap(console.log));
    this.authUser$ = this.store.select(selectAuthUser)
  }
  logout() {
    this.authService.logout();
  }
}
