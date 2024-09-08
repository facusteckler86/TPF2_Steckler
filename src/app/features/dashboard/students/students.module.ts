import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { studentsRoutingModule } from './students-routing.module';
import { studentsComponent } from './students.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    studentsComponent],
  imports: [
    CommonModule,
    studentsRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    SharedModule,
    MatDialogModule
  ]
})
export class studentsModule { }
