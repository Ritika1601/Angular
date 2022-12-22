import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformsComponent } from './userforms/userforms.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectformComponent } from './projectform/projectform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserformsComponent,
    ProjectFormComponent,
    ProjectformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
