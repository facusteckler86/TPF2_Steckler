import { Component } from '@angular/core';
import { CoursesService } from '../../../../../core/service/courses.service';
import { Observable } from 'rxjs';
import { Course } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {

  curso$: Observable<Course | undefined>;

  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute){
      this.curso$ =
      this.coursesService.getCourseById(this.activatedRoute.snapshot.params['id'])
  }

}
