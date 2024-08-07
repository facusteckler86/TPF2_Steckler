import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
//import { APP_CONFIG } from '../../../core/injection-token';

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



}
