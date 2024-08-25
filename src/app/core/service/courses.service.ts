import { Injectable } from '@angular/core';
import { Course } from '../../features/dashboard/courses/models';
import { map, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


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

  constructor(private HttpClient: HttpClient) {}



  editCourseById(id: string, update: Course) {
    return this.HttpClient.put(environment.apiURL + 'courses' + id, update);
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
    return this.HttpClient.get<Course[]>(environment.apiURL + '/courses');
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

  deleteCourseById(id: string) {
    return this.HttpClient.delete(environment.apiURL + 'courses' + id);
  }
}
