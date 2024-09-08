import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentsActions } from './enrollments.actions';
import { Enrollment } from '../models';
import { Course, students } from '../../courses/models';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {
  isLoading: boolean;
  enrollments: Enrollment[];
  error: unknown;
  isLoadingstudentsAndCourses: boolean,
  students: students[],
  courses: Course[]
}

export const initialState: State = {
  isLoading: false,
  enrollments: [],
  error: null,
  isLoadingstudentsAndCourses: true,
  students: [],
  courses: []
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentsActions.loadEnrollments, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(EnrollmentsActions.loadEnrollmentsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      enrollments: action.data,
    };
  }),
  on(EnrollmentsActions.loadEnrollmentsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })
);

export const enrollmentsFeature = createFeature({
  name: enrollmentsFeatureKey,
  reducer,
});
