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
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './store/students.effects';
import { StoreModule } from '@ngrx/store';
import { studentsFeature } from './store/students.reducer';
import { CoreModule } from '../../../core/core.module';
import { MatListModule } from '@angular/material/list';



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
    MatDialogModule,
    CoreModule,
    EffectsModule.forFeature([StudentsEffects]),
    StoreModule.forFeature(studentsFeature),
    MatListModule
  ]
})
export class studentsModule { }
