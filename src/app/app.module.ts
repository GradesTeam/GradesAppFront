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
import { InstrumentListComponent } from './ui/instrument-list/instrument-list.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TeacherSubjectComponent } from './component/teacher-subject/teacher-subject.component';
import { TeacherInstrumentItemComponent } from './component/teacher-instrument-item/teacher-instrument-item.component';

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
    TeacherListComponent,
    InstrumentListComponent,
    PageNotFoundComponent,
    NavbarComponent,
    TeacherSubjectComponent,
    TeacherInstrumentItemComponent
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
