import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentsActions } from './enrollments.actions';


@Injectable()
export class EnrollmentsEffects {

  loadEnrollmentss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrollmentsActions.loadEnrollmentss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => EnrollmentsActions.loadEnrollmentssSuccess({ data })),
          catchError(error => of(EnrollmentsActions.loadEnrollmentssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
