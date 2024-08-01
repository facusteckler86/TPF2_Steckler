import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  position: number;
  nombre: string;
  apellido: number;
  course: string

}

const ELEMENT_DATA: PeriodicElement[] = [
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

}
