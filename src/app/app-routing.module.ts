import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./features/auth/auth.module").then((refArhivo)=> refArhivo.AuthModule)
  },

  {
    path: "dashboard",
    loadChildren: () => import("./features/dashboard/dashboard.module").then((refArchivo)=> refArchivo.DashboardModule)

  },
  {
    path: "***",
    redirectTo: "/auth",
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
