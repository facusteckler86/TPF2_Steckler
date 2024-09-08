import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

//Aplico Lazy Loading

const routes: Routes = [
// {
//   path: "login",
//   component: LoginComponent,
//   loadChildren: () => import("./login/login.module")
//   .then((refArchivo)=> refArchivo.LoginModule)
// },

{
  path: '**',
  redirectTo: 'auth',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
