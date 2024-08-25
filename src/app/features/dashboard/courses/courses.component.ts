import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './course-component-dialog/course-dialog.component';
import { Course } from './models';
import { generateId } from '../../../shared/utils';
import { CoursesService } from '../../../core/service/courses.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
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

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService,
    private HttpClient: HttpClient
  ) {}

  // onInit para el inicio de los cursos, se demora un poco en verse la lista
  ngOnInit(): void {
    this.loadCourses();
  }

  isLoading = false;

  loadCourses() {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (Courses) => {
        this.courseList = Courses;
      },

      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 404) {
            alert('Curso no encontrado, proba con otro');
          }
        }
      },

      complete: () => {
        this.isLoading = false;
      },
    });
  }
  //cuando se elige uno de los cursos que estan disponibles
  openDialog(): void {
    this.matDialog
      .open(CoursesDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value) => {
          console.log('Este es el curso que eligio: ', value);
          this.nombreCurso = value.name;

          value['id'] = generateId(4);
          this.isLoading = true;
          this.coursesService.addCourse(value).subscribe({
            next: (course) => {
              this.courseList = [...course];
            },
            complete: () => {
              this.isLoading = false;
            },
          });
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
            this.coursesService
              .editCourseById(editingCourse.id, value)
              .subscribe({
                next: (course) => {
                 this.courseList = []
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
        next: (courses) => {
          this.courseList = [];
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
