import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component.js';
import { SimpleFormComponent } from './forms/simple-form.component';
import { ComplexFormComponent } from './forms/complex-form.component';
import { FormValidationComponent } from './forms/form-validation.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [ AppComponent, SimpleFormComponent, ComplexFormComponent, FormValidationComponent ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ]
})
export class AppModule {}