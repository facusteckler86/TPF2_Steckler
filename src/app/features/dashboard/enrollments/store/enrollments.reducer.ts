import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentsActions } from './enrollments.actions';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(EnrollmentsActions.loadEnrollmentss, state => state),
  on(EnrollmentsActions.loadEnrollmentssSuccess, (state, action) => state),
  on(EnrollmentsActions.loadEnrollmentssFailure, (state, action) => state),
);

export const enrollmentsFeature = createFeature({
  name: enrollmentsFeatureKey,
  reducer,
});

