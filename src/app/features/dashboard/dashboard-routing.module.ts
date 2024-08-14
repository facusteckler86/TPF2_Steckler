import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';

const routes: Routes = [

  {
    path: "courses",
    component: CoursesComponent,
    loadChildren: () => import ("./courses/courses.module").then((refArhivo) => refArhivo.CoursesModule)
  },
  {
    path: "home",
    component: HomeComponent,
    loadChildren: () => import ("./home/home.module").then((refArhivo) => refArhivo.HomeModule)
  },
  {
    path: "students",
    component: StudentsComponent,
    loadChildren: () => import ("./students/students.module").then((refArhivo)=> refArhivo.StudentsModule)
   },
   {
      path: "enrollments",
      component: EnrollmentsComponent,
      loadChildren: ()=> import("./enrollments/enrollments.module").then((refArchivo)=>refArchivo.EnrollmentsModule)
   },
   {
    path: '**', // Cualquier ruta que no coincida con las anteriores (basicamente es un default)
    redirectTo: '/dashboard/home',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
