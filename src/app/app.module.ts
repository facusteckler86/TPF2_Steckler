import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { AuthModule } from './features/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { rootReducer } from './core/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(rootReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideNativeDateAdapter(),
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
