import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  CreateEnrollmentPayload,
  Enrollment,
  LoadstudentsAndCoursesResponse,
} from '../models';

export const EnrollmentsActions = createActionGroup({
  source: 'Enrollments',

  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
    'Load students And Courses': emptyProps(),
    'Load students And Courses Success': props<{data: LoadstudentsAndCoursesResponse }>(),
    'Load students And Courses Failure': props<{ error: unknown }>(),
    'Create Enrollments': props<{ payload: CreateEnrollmentPayload }>(),
    'Create Enrollments Success': props<{ data: Enrollment }>(),
    'Create Enrollments Failure': props<{ error: unknown }>(),
  },
});
