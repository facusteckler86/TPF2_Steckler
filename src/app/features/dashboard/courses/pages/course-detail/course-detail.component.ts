import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../../../../core/service/courses.service';
import { concatMap, delay, forkJoin, Observable, of, Subscriber } from 'rxjs';
import { Course } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent {

  /////////////////////////////////////

  course$: Observable<Course | undefined>;

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.course$ = this.coursesService.getCourseById(
      this.activatedRoute.snapshot.params['id']
    );
  }


  }
///////////////////////////////////////////////////////////











