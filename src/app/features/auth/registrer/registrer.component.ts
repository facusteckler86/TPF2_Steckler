import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { Students } from '../../dashboard/courses/models';
//import { APP_CONFIG } from '../../../core/injection-token';



const ELEMENT_DATA: Students[] = [
  {id: 1, name: 'Juan', apellido: "Gonzalez", course: 'JavaScript'},
  {id: 2, name: 'Esteban', apellido: "Perez", course: 'Python'},
  {id: 3, name: 'Facundo', apellido: "Steckler", course: 'Angular'},

];

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})

export class RegistrerComponent {



}
