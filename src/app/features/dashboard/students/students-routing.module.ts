import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentsComponent } from './students.component';

const routes: Routes = [{
  path:'',
  component: studentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class studentsRoutingModule { }
