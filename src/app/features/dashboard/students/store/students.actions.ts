import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { students } from '../../courses/models';

export const StudentsActions = createActionGroup({
  source: 'Students',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: students[] }>(),
    'Load Students Failure': props<{ error: unknown }>(),
    'Delete Students': props<{id: string}>(),
    'Delete Students Success': props<{data: students[]}>(),
    'Delete Students Failure': props<{error: unknown}>()
  }
});
