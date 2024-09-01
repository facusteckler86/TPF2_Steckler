import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentsActions } from './enrollments.actions';
import { EnrollmentsService } from '../../../../core/service/enrollments.service';

@Injectable()
export class EnrollmentsEffects {
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      //Filtro de acciones en la aplicacion
      ofType(EnrollmentsActions.loadEnrollments),
      concatMap(() =>
        // Uso de nuestro Observable
        this.enrollmentsService.getEnrollments().pipe(
          map((data) => EnrollmentsActions.loadEnrollmentsSuccess({ data })),

          catchError((error) =>
            of(EnrollmentsActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  loadStudentsAndCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadStudentsAndCourses),
      concatMap(() =>
        this.enrollmentsService.getStudentsAndCourses().pipe(
          map((data) =>
            EnrollmentsActions.loadStudentsAndCoursesSuccess({ data })
          ),
          catchError((error) =>
            of(EnrollmentsActions.loadStudentsAndCoursesFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private enrollmentsService: EnrollmentsService
  ) {}
}
