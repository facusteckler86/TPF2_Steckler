import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: "login",
  loadChildren: () => import("./login/login.module").then((refArchivo)=> refArchivo.LoginModule)
},
{
  path: "registrer",
  loadChildren: () => import("./registrer/registrer.module").then((refArchivo) => refArchivo.RegistrerModule)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
