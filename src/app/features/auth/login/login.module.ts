import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthService } from '../../../core/service/auth.service';
import { APP_CONFIG } from '../../../core/injection-token';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule


  ],

  providers: [
    AuthService,
    {
      provide: APP_CONFIG,
      useValue:{
        baseURL: "...",
        version: "2.0",
      }
    }
  ]
})
export class LoginModule { }
