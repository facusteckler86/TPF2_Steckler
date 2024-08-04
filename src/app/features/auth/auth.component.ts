import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { APP_CONFIG } from '../../core/injection-token';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  loginForm: FormGroup;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    @Inject(APP_CONFIG) private appConfig: any){

      this.loginForm = this.fb.group({
        email: ["test@mail.com", [Validators.required,Validators.email]],
        password: ["123456", [Validators.required]],
      });
    }

    onSubmit(){
      if(this.loginForm.invalid){
        alert("El formulario no es valido");
      }else{
        const data = {
          email: this.loginForm.get("email")?.value,
          password: this.loginForm.get("password")?.value,
        };
        this.authService.login();
      }
    }

}
