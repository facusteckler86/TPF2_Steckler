import { Injectable } from '@angular/core';
import { Course, Students } from '../../features/dashboard/courses/models';
import { concatMap, forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Enrollment, LoadStudentsAndCoursesResponse } from '../../features/dashboard/enrollments/models';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentsService {
  private MY_DATABASE: Enrollment[] = [];

  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(
      environment.apiURL + '/enrollments?_embed=students&_embed=courses'
    );
  }


  getStudentsAndCourses(): Observable<LoadStudentsAndCoursesResponse> {
    return forkJoin({
      students: this.http.get<Students[]>(environment.apiURL + '/students'),
      courses: this.http.get<Course[]>(environment.apiURL + '/course'),
    })
  }

  addEnrollment(payload: CreateEnrollmentPayload): Observable<Enrollment> {
    return this.http
      .post<Enrollment>(environment.apiURL + '/enrollments', payload)
      .pipe(
        concatMap((enrollmentCreated) =>
          this.http.get<Enrollment>(
            environment.apiURL +
              '/enrollments/' +
              enrollmentCreated.id +
              '?_embed=courses&_embed=student'
          )
        )
      );
  }
}
