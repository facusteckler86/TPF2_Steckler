import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { StudentsActions } from './students.actions';
import { StudentsService } from '../../../../core/service/students.service';


@Injectable()
export class StudentsEffects {

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentsActions.loadStudents),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.StudentsService.getStudents().pipe(
          map(data => StudentsActions.loadStudentsSuccess({ data })),
          catchError(error => of(StudentsActions.loadStudentsFailure({ error }))))
      )
    );
  });

  deleteStudents$ = createEffect(()=> {
    return this.actions$.pipe(
      ofType(StudentsActions.deleteStudents),
      concatMap((action)=> this.StudentsService.deleteStudentsById(action.id).pipe(
        map((data)=> StudentsActions.deleteStudentsSuccess({data})),
        catchError((error)=> of(StudentsActions.deleteStudentsFailure({error})))
      ))
    )
  })


  constructor(private actions$: Actions, private StudentsService: StudentsService) {}
}
