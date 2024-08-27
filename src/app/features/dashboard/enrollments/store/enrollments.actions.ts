import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EnrollmentsActions = createActionGroup({
  source: 'Enrollments',
  events: {
    'Load Enrollmentss': emptyProps(),
    'Load Enrollmentss Success': props<{ data: unknown }>(),
    'Load Enrollmentss Failure': props<{ error: unknown }>(),
  }
});
