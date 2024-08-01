import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../features/dashboard/courses/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_TEST: User = {
    email: "mail@mail.com",
    password: "Qwerty123",
    role: "ADMIN",
  };

  private VALID_TOKEN = "QWERTY123456";

  private _authUser$ = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser$.asObservable();

  constructor(private router: Router){}

login(){

  this._authUser$.next(this.USER_TEST);
  localStorage.setItem("token", this.VALID_TOKEN);
  this.router.navigate(["courses","dashboard","home","student"]);
}

logout(){
  localStorage.removeItem("token");
  this._authUser$.next(null);
  this.router.navigate(["auth","login","home"]);
}

verifyToken(): Observable<Boolean>{
  const token = localStorage.getItem("token");
  const isValid = this.VALID_TOKEN === token;
  if(isValid){
    this._authUser$.next(this.USER_TEST)
  }
  return of(isValid);
}
verificarToken(){}

obtenerUsuarioAutenticado(){}



}
