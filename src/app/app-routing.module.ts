import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthComponent } from './features/auth/auth.component';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/guards/auth.guard';


// Aplicacion de Lazy Loading y de los Guards

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./features/auth/auth.module').then(
        (refArhivo) => refArhivo.AuthModule
      ),
  },

  {
    path: 'dashboard',
    //canActivate: [authGuard],
    component: DashboardComponent,
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (refArchivo) => refArchivo.DashboardModule
      ),
  },
  {
    path: "**",
    redirectTo: "auth",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
