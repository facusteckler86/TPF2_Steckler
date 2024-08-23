import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Students } from '../courses/models';


export interface StudentsList {
  position: number;
  name: string;
  apellido: string;
  course: string;

}

const ELEMENT_DATA: StudentsList[] = [
  {position: 1, name: 'Juan', apellido: "Gonzalez", course: "Python" },
  {position: 2, name: 'Esteban', apellido: "Perez", course: "Java"},
  {position: 3, name: 'Facundo', apellido: "Steckler", course: "Angular" },

];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  constructor(private HttpClient: HttpClient){}

  getStudents(): Observable<Students[]>{
    return this.HttpClient.get<Students[]>('http://localhost:3000/users')
  }

}
