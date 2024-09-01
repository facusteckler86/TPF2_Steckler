import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollments from './enrollments.reducer';
import { Students, Course } from '../../courses/models';

export const selectEnrollmentsState = createFeatureSelector<fromEnrollments.State>(
  fromEnrollments.enrollmentsFeatureKey
);
export const selectEnrollments = createSelector(
  selectEnrollmentsState,
  (state) => state.enrollments
);

export const selectEnrollmentsIsLoading = createSelector(
  selectEnrollmentsState,
  (state) => state.isLoading
);

export const selectEnrollmentsError = createSelector(
  selectEnrollmentsState,
  (state) => state.error
);

export const selectEnrollmentsStudents = createSelector(
  selectEnrollmentsState,
  (state) => state.students
);

export const selectEnrollmentsCourses = createSelector(
  selectEnrollmentsState,
  (state) => state.courses
);
