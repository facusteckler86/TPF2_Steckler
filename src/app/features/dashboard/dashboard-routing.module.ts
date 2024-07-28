import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "courses",
    //component: CoursesComponent
    loadChildren: () => import ("./courses/courses.module").then((refArhivo) => refArhivo.CoursesModule)
  },
  {
    path: "home",
    //component: HomeComponent
    loadChildren: () => import ("./home/home.module").then((refArhivo) => refArhivo.HomeModule)
  },
  {
    path: "student",
    //component: StudentsComponent
    loadChildren: () => import ("./students/students.module").then((refArhivo)=> refArhivo.StudentsModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
