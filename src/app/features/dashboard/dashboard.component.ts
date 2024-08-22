import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from './courses/models';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  showFiller = false;

  authUser$: Observable<User | null>;

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$.pipe(tap(console.log));
  }
  logout() {
    this.authService.logout();
  }
}
