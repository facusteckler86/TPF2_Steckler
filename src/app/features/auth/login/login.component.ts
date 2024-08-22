import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
//import { APP_CONFIG } from '../../../core/injection-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  /**
   *
   * @param authService Servicio de el componente auth para los validadores de usuario
   *
   * @param fb Es una forma abreviada de llamar al FormBuilder
   */

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['test@mail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert('El formulario no es valido');
    } else {
      const data = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };
      this.authService.login(data);
    }
  }
}
