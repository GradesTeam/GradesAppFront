import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { SubjectListComponent } from './ui/subject-list/subject-list.component';
import { SubjectDetailsComponent } from './ui/subject-details/subject-details.component';
import { StudentListComponent } from './ui/student-list/student-list.component';
import { StudentDetailsComponent } from './ui/student-details/student-details.component';
import { StudentMarksComponent } from './ui/student-marks/student-marks.component';
import { InstrumentDetailsComponent } from './ui/instrument-details/instrument-details.component';
import { TeacherListComponent } from './ui/teacher-list/teacher-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SubjectListComponent,
    SubjectDetailsComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentMarksComponent,
    InstrumentDetailsComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
