import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../features/dashboard/courses/models';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private USER_TEST: User = {
    email: '',
    password: '',
    role: 'ADMIN',
    id: '',
    firstName: '',
    lastName: '',
    token: '',
  };

  private VALID_TOKEN = 'QWERTY123456';

  private _authUser$ = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser$.asObservable();
  static verifyToken: any;
  static authUser$: any;

  constructor(private router: Router, private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    this.http
      .get<User[]>(environment.apiURL + '/user', {
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
            //this.store.dispatch(setAuthUser({payload: authUser}));
            //this.router.navigate(['dashboard','home']);
          }

          //Error: (err)=>{
          //this.notifier.sendNotification('Error al iniciar sesion')
          //}
        },
      });
  }

  logout() {
    localStorage.removeItem('token');
    this._authUser$.next(null);
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<Boolean> {
    const token = localStorage.getItem('token');
    const isValid = this.VALID_TOKEN === token;
    if (isValid) {
      this._authUser$.next(this.USER_TEST);
    }
    return of(isValid);
  }
}
