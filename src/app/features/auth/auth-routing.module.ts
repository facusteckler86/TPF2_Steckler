import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';

const routes: Routes = [
{
  path: "login",
  loadChildren: () => import("./login/login.module")
  .then((refArchivo)=> refArchivo.LoginModule)
},
{
  path: "registrer",
  loadChildren: () => import("./registrer/registrer.module")
  .then((refArchivo) => refArchivo.RegistrerModule)
},
{
  path: '**',
  redirectTo: 'login',
},

  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(
        (refArchivo) => refArchivo.LoginModule
      ),
  },
  {
    path: 'registrer',
    loadChildren: () =>
      import('./registrer/registrer.module').then(
        (refArchivo) => refArchivo.RegistrerModule
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
