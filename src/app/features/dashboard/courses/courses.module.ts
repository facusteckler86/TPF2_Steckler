import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesDialogComponent } from './course-component-dialog/course-dialog.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from '../../../core/core.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDialogComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    MatTableModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormField,
    MatDialogModule,
    MatIcon,
    MatButtonModule,
    CoreModule,
    MatProgressBarModule


  ]
})
export class CoursesModule { }
