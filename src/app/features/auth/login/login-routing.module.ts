import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    loadChildren: ()=> import('./login.module').then((refArchivo)=> refArchivo.LoginModule),
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
