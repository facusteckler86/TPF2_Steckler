import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { User } from '../../features/dashboard/courses/models';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { setAuthUser, unsetAuthUser } from '../store/auth/auth.actions';
import { NotifierService } from './notifier.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //TOKEN PARA EL ADMIN
  private VALID_TOKEN = 'QWERTY123456';

  private _authUser$ = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser$.asObservable();

  static verifyToken: any;
  static authUser$: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<RootState>,
    private notifier: NotifierService
  ) {}

  login(data: { email: string; password: string }) {
    this.http
      .get<User[]>(environment.apiURL + '/users', {
        params: {
          email: data.email,
          password: data.password,
        },
      })
      .subscribe({
        next: (Response) => {
          if (!Response.length) {
            alert('Usuario Invalido');
          } else {
            const authUser = Response[0];
            localStorage.setItem('token', authUser.token);
            this.store.dispatch(setAuthUser({ payload: authUser }));
            this.router.navigate(['dashboard', 'home']);
          }
        },
        error: (err)=>{
          this.notifier.sendNotification('Error al iniciar Sesion');
        }
      });
  }

  verifyToken(): Observable<Boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(false);
    }
    return this.http
      .get<User[]>(environment.apiURL + '/users', {
        params: {
          token: token,
        },
      })
      .pipe(
        map((response) => {
          if (!response.length) {
            return false;
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this.store.dispatch(setAuthUser({ payload: authUser }));
            this._authUser$.next(authUser);
            return true;
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthUser());
    this.router.navigate(['auth', 'login']);
  }
}
