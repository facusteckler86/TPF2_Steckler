import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { APP_CONFIG } from '../../../core/injection-token';

export interface Students {
  position: number;
  nombre: string;
  apellido: number;
  course: string

}

const ELEMENT_DATA: Students[] = [
  {position: 1, nombre: 'Hydrogen', apellido: 1.0079, course: 'H'},
  {position: 2, nombre: 'Helium', apellido: 4.0026, course: 'He'},
  {position: 3, nombre: 'Lithium', apellido: 6.941, course: 'Li'},

];

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})

export class RegistrerComponent {

  displayedColumns: string[] = ['position', 'nombre', 'apellido', 'curso'];
  dataSource = ELEMENT_DATA;

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
