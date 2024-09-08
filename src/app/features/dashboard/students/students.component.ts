import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { students } from '../courses/models';


export interface studentsList {
  position: number;
  name: string;
  apellido: string;
  course: string;

}

const ELEMENT_DATA: studentsList[] = [
  {position: 1, name: 'Juan', apellido: "Gonzalez", course: "Python" },
  {position: 2, name: 'Esteban', apellido: "Perez", course: "Java"},
  {position: 3, name: 'Facundo', apellido: "Steckler", course: "Angular" },

];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class studentsComponent {

  constructor(private HttpClient: HttpClient){}

  getstudents(): Observable<students[]>{
    return this.HttpClient.get<students[]>('http://localhost:3000/users')
  }

}
