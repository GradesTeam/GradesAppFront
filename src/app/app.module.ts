import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { SubjectListComponent } from './ui/subject-list/subject-list.component';
import { SubjectDetailsComponent } from './ui/subject-details/subject-details.component';
import { StudentDetailsComponent } from './ui/student-details/student-details.component';
import { StudentMarksComponent } from './ui/student-marks/student-marks.component';
import { InstrumentDetailsComponent } from './ui/instrument-details/instrument-details.component';
import { TeacherListComponent } from './ui/teacher-list/teacher-list.component';
import { InstrumentListComponent } from './ui/instrument-list/instrument-list.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageTestNonoComponent } from './ui/page-test-nono/page-test-nono.component';
import { StudentItemComponent } from './component/student-item/student-item.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { PageStudentListComponent } from './ui/page-student-list/page-student-list.component';

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
    PageTestNonoComponent,
    StudentItemComponent,
    PageStudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
