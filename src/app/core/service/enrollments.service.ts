import { Injectable } from '@angular/core';
import { Course, Students } from '../../features/dashboard/courses/models';
import { concatMap, forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Enrollment } from '../../features/dashboard/enrollments/models';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  private MY_DATABASE: Enrollment[] = [];



  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]>{
    return this.http.get<Enrollment[]>(
      environment.apiURL + '/sales?_embed=students&_embed=product'
    );
    }
    getStudentsAndProducts(): Observable<LoadStudentsAndProductsResponse> {
      return forkJoin({
        students: this.http.get<Students[]>(environment.apiURL + '/students'),
        products: this.http.get<Course[]>(environment.apiURL + '/course'),
      });
    }

    addEnrollment(payload: CreateEnrollmentPayload): Observable<Enrollment> {
      return this.http
        .post<Enrollment>(environment.apiURL + '/sales', payload)
        .pipe(
          concatMap((enrollmentCreated) =>
            this.http.get<Enrollment>(
              environment.apiUrl +
                '/sales/' +
                enrollmentCreated.id +
                '?_embed=product&_embed=student'
            )
          )
        );
    }
}
