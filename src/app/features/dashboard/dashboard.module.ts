import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SharedModule } from '../../shared/shared.module';
import { MatIcon } from '@angular/material/icon';
import { CoreModule } from '../../core/core.module';
//import { APP_CONFIG } from '../../core/injection-token';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    SharedModule,
    MatIconButton,
    MatIcon,
    CoreModule

  ]
})
export class DashboardModule {

}
