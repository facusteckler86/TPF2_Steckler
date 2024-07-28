import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PipesPipe } from './pipes/pipes.pipe';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { DirectivesDirective } from './directives/directives.directive';


@NgModule({
  declarations: [
    PipesPipe,
    NombreCompletoPipe,
    DirectivesDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
