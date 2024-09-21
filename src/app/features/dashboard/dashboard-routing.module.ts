import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { studentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { CourseDetailComponent } from './courses/pages/course-detail/course-detail.component';
import { adminGuard } from '../../core/guards/guards/admin.guard';

//Aplico el Lazy Loading y el guard de Admin a la creacion de cursos

const routes: Routes = [
  {
    path: 'courses',
    //canActivate: [adminGuard],
    loadChildren: () =>
      import('./courses/courses.module').then(
        (refArhivo) => refArhivo.CoursesModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (refArhivo) => refArhivo.HomeModule),
  },
  {
    path: 'students',

    loadChildren: () =>
      import('./students/students.module').then(
        (refArhivo) => refArhivo.studentsModule
      ),
  },
  {
    path: 'enrollments',

    loadChildren: () =>
      import('./enrollments/enrollments.module').then(
        (refArchivo) => refArchivo.EnrollmentsModule
      ),
  },

  {
    path: '**',
    redirectTo: '/dashboard/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
