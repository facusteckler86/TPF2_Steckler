import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './course-component-dialog/course-dialog.component';
import { Course } from './models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  nombreCurso: "{{nombreCurso}}" | undefined;

  displayedColumns: string[] = ['id', 'name', 'starDate', "endDate", "actions"];

  courseList : Course [] = [
    {
      id: "01",
      name: 'Angular',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: "02",
      name: 'JavaScript',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: "03",
      name: 'Java',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: "04",
      name: 'Python',
      startDate: new Date(),
      endDate: new Date(),
    }

  ];
element: any;


    constructor(private matDialog: MatDialog){ }

    openDialog(): void {
      this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
        next:(value) => {
          console.log("Este es el curso que eligio: ", value);
            this.nombreCurso = value.name;

            value["id"] = generateId(4);

            this.courseList = [...this.courseList, value]
        }
      });
    }

    // Parte del codigo para borrar el curso de la lista

    deleteCourseById(id: string){
      this.courseList = this.courseList.filter((el)=>el.id != id)
    }

}

export { Course };
