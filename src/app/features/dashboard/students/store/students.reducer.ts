import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentsActions } from './students.actions';
import { students } from '../../courses/models';

export const studentsFeatureKey = 'students';

export interface State {
  isLoadingStudents: boolean;
  students: students[];
  error: unknown;
}

export const initialState: State = {
  isLoadingStudents: false,
  students: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(StudentsActions.loadStudents, (state) => ({
    ...state,
    isLoadingStudents: true,
  })),
  on(StudentsActions.loadStudentsSuccess, (state, action) => ({
    ...state,
    isLoadingStudents: false,
    students: action.data,
    error: null,
  })),
  on(StudentsActions.loadStudentsFailure, (state, action) => ({
    ...state,
    isLoadingStudents: false,
    error: action.error,
  })),

  /* Lo tengo que dejar comentado porque no me toma el id dentro de Students, pero lo tengo
  declardo en el models dentro de courses*/

  //  on(StudentsActions.deleteStudentsSuccess, (state, action) => {
  //    return {
  //      ...state,
  //      students: state.students.filter((s) => s.id !== action.data.id),
  //      error: null,
  //    };
  //  })
);

export const studentsFeature = createFeature({
  name: studentsFeatureKey,
  reducer,
});
