import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrollment } from '../models';

export const EnrollmentsActions = createActionGroup({
  source: 'Enrollments',

  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
    'Load Students And Courses': emptyProps(),
    'Load Students And Courses Success': props<{
      data: LoadStudentsAndCoursesResponse
    }>(),
    'Load Students And Courses Failure': props<{error: unknown}>(),
    'Create Enrollments': props<{payload : CreateEnrollmentPayload}>(),
    'Create Enrollment Success': props<{data: Enrollment}>(),
    'Create Enrollment Failure': props<{error: unknown}>(),
  },
});
