import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

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

  displayedColumns: string[] = ['position', 'name', 'apellido', 'course'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<StudentsList>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
