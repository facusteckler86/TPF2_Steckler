import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentsActions } from './enrollments.actions';
import { EnrollmentsService } from '../../../../core/service/enrollments.service';

@Injectable()
export class EnrollmentsEffects {

  createEnrollments$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(EnrollmentsActions.createEnrollments),
      concatMap((Actions)=>
      this.enrollmentsService.addEnrollment(Actions.payload).pipe(
        map((data)=> EnrollmentsActions.createEnrollmentsSuccess({data})),
        catchError((error)=>
        of(EnrollmentsActions.createEnrollmentsFailure({error})))
      ))
    )
  })

  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      //Filtro de acciones en la aplicacion
      ofType(EnrollmentsActions.createEnrollments),
      concatMap((action) =>
        // Uso de nuestro Observable
        this.enrollmentsService.addEnrollment(action.payload).pipe(
          map((data) => EnrollmentsActions.createEnrollmentsSuccess({ data })),

          catchError((error) =>
            of(EnrollmentsActions.createEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

// loadStudentsAndCourses$ = createEffect(()=>{
//   return this.actions$.pipe(
//     ofType(EnrollmentsActions.loadStudentsAndCourses),
//     concatMap((action)=>
//       this.enrollmentsService.getstudentsAndCourses(action.payload).pipe(
//         map((data)=>EnrollmentsActions.loadStudentsAndCoursesSuccess({data})),

//         catchError((error)=>
//         of(EnrollmentsActions.loadStudentsAndCoursesFailure({error})))
//       )
//     )
//   )
// })

  constructor( private actions$: Actions, private enrollmentsService: EnrollmentsService) {}
}
