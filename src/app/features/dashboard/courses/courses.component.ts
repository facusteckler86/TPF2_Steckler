import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './course-component-dialog/course-dialog.component';
import { Course } from './models';
import { generateId } from '../../../shared/utils';
import { CoursesService } from '../../../core/service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  nombreCurso: '{{nombreCurso}}' | undefined;

  displayedColumns: string[] = ['id', 'name', 'starDate', 'endDate', 'actions'];

  courseList: Course[] = [
    {
      id: '01',
      name: 'Angular',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '02',
      name: 'JavaScript',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '03',
      name: 'Java',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '04',
      name: 'Python',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];
  element: any;

  isLoading = false;

  constructor(private matDialog: MatDialog,
              private coursesService: CoursesService) {}

  openDialog(): void {
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          console.log('Este es el curso que eligio: ', value);
          this.nombreCurso = value.name;

          value['id'] = generateId(4);

          this.courseList = [...this.courseList, value];
        },
      });
  }
  // parte en la que se edita el listado de cursos

  editCourse(editingCourse: Course) {
    this.matDialog
      .open(CoursesDialogComponent, { data: editingCourse })
      .afterClosed()
      .subscribe({
        next: (value) => {
          if (!!value) {
            this.coursesService.editCourseById(
              editingCourse.id,
              value
            ).subscribe({
              next: (Course) => {
                this.courseList = [...Course];
              },
            });
          }
        },
      });
  }

  // Parte del codigo para borrar el curso de la lista

  deleteCourseById(id: string) {
    if (confirm('Esta seguro de salir?')) {
      this.isLoading = true;

      this.coursesService.deleteCourseById(id).subscribe({
        next: (Course) => {
          this.courseList = [...Course];
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}


