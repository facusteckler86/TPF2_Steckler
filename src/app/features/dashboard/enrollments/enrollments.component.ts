import { Component, OnInit } from '@angular/core';
import { EnrollmentsActions } from './store/enrollments.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { Observable } from 'rxjs';
import { Enrollment, Student } from './models';
import { Course, Students } from '../courses/models';
import {
  selectEnrollments,
  selectEnrollmentsCourses,
  selectEnrollmentsError,
  selectEnrollmentsIsLoading,
  selectEnrollmentsStudents,
} from './store/enrollments.selectors';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.css',
})
export class EnrollmentsComponent implements OnInit {
  enrollmentForm: FormGroup;
  isLoading$: Observable<boolean>;
  enrollments$: Observable<Enrollment[]>;
  students$: Observable<Students[]>;
  error$: Observable<unknown>;
  courses$: Observable<Course[]>;
  constructor(private store: Store<RootState>, private fb: FormBuilder) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading);
    this.error$ = this.store.select(selectEnrollmentsError);
    this.students$ = this.store.select(selectEnrollmentsStudents);
    this.courses$ = this.store.select(selectEnrollmentsCourses);

    this.enrollmentForm = this.fb.group({
      studentId: [null, Validators.required],
      productId: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.store.dispatch(EnrollmentsActions.loadEnrollments());
    this.store.dispatch(EnrollmentsActions.loadStudentsAndCourses());
  }

  addEnrollment(): void {
    if (this.enrollmentForm.invalid) {
      alert('El form es invalido');
    } else {
      this.store.dispatch(
        EnrollmentsActions.createEnrollments({
          payload: {
            productId: this.enrollmentForm.get('courseId')?.value,
            studentId: this.enrollmentForm.get('studentId')?.value,
          },
        })
      );
    }
  }
}
