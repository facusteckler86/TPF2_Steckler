import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrerRoutingModule } from './registrer-routing.module';
import { RegistrerComponent } from './registrer.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { CoreModule } from '../../../core/core.module';



@NgModule({
  declarations: [
    RegistrerComponent
  ],
  imports: [
    CommonModule,
    RegistrerRoutingModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    CoreModule

  ]
})
export class RegistrerModule { }
