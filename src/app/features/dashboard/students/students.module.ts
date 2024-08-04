import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class StudentsModule { }
