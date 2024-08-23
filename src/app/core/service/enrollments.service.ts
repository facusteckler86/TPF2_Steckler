import { Injectable } from '@angular/core';
import { Course, Students } from '../../features/dashboard/courses/models';
import { concatMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  private MY_DATABASE: enrollments[] = [];



  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<Enrollments[]>{
    return this.http.get<Enrollments[]>(
      environment.apiURL + '/sales?_embed=students&_embed=product'
    );
    }
    getStudentsAndProducts(): Observable<LoadStudentsAndProductsResponse> {
      return forkJoin({
        students: this.http.get<Students[]>(environment.apiURL + '/students'),
        products: this.http.get<Course[]>(environment.apiURL + '/course'),
      });
    }

    addEnrollment(payload: CreateEnrollmentPayload): Observable<Enrollments> {
      return this.http
        .post<Enrollments>(environment.apiURL + '/sales', payload)
        .pipe(
          concatMap((enrollmentCreated) =>
            this.http.get<Enrollments>(
              environment.apiUrl +
                '/sales/' +
                enrollmentCreated.id +
                '?_embed=product&_embed=student'
            )
          )
        );
    }
}
