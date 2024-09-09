import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { students } from '../courses/models';
import { Store } from '@ngrx/store';
import { StudentsActions } from './store/students.actions';
import { selectsLoadingStudents, selectStudents, selectStudentsError } from './store/students.selectors';


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
export class studentsComponent implements OnInit{


  students$: Observable<students[]>;
  isLoading$ : Observable<boolean>;
  error$: Observable<unknown>;

  constructor(private HttpClient: HttpClient,private store: Store){
    this.students$ = this.store.select(selectStudents);
    this.isLoading$ = this.store.select(selectsLoadingStudents);
    this.error$ = this.store.select(selectStudentsError)
  }

  ngOnInit(): void {
    this.store.dispatch(StudentsActions.loadStudents());
  }

  getstudents(): Observable<students[]>{
    return this.HttpClient.get<students[]>('http://localhost:3000/users')
  }

  deleteStudents(id: string){
    this.store.dispatch(StudentsActions.deleteStudents({id}))
  }

  reloadPage(){
    location.reload()
  }

}
