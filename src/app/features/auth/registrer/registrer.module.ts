import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrerRoutingModule } from './registrer-routing.module';
import { RegistrerComponent } from './registrer.component';


@NgModule({
  declarations: [
    RegistrerComponent
  ],
  imports: [
    CommonModule,
    RegistrerRoutingModule
  ]
})
export class RegistrerModule { }
