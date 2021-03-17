import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DisplayTableComponent } from './display-table/display-table.component';
import { BiometricsComponent } from './biometrics/biometrics.component';

@NgModule({
  declarations: [AppComponent, InputFormComponent, DisplayTableComponent, BiometricsComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
