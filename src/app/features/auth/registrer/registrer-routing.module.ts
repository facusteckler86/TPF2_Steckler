import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrerComponent } from './registrer.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrerRoutingModule {}
