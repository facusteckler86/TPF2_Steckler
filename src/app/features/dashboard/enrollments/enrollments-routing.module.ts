import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentsComponent } from './enrollments.component';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentsComponent,

  },
  {
    path: "**",
    redirectTo: '/dashboard/enrollments'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentsRoutingModule { }
