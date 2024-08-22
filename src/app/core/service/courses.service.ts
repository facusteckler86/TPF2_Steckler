import { Injectable } from '@angular/core';
import { Course } from '../../features/dashboard/courses/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private MY_DATABASE = [
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

  editCourseById(id: string, update: Course) {
    this.MY_DATABASE = this.MY_DATABASE.map((el) =>
      el.id === id ? { ...update, id } : el
    );
    return this.getCourses();
  }

  searchCourseByName(search: string): Observable<Course[]> {
    return this.getCourses().pipe(
      map((todosLosCursos) =>
        todosLosCursos.filter((curso) =>
          curso.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  getCourses(): Observable<Course[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.MY_DATABASE);
        observer.complete();
      }, 1500);
    });
  }

  //Aca se conecta para ver el detalle de los id de cursos.

  getCourseById(id: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((todosLosCursos) => todosLosCursos.find((el) => el.id === id))
    );
  }

  addCourse(course: Course): Observable<Course[]> {
    this.MY_DATABASE.push(course);
    return this.getCourses();
  }

  deleteCourseById(id: string): Observable<Course[]> {
    this.MY_DATABASE = this.MY_DATABASE.filter((el) => el.id != id);
    return this.getCourses();
  }
}
