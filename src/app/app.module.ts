import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { TeacherSubjectComponent } from './component/teacher-subject/teacher-subject.component';
import { TeacherInstrumentItemComponent } from './component/teacher-instrument-item/teacher-instrument-item.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeacherReferentListComponent } from './component/teacher-referent-list/teacher-referent-list.component';
import { TeacherInstrumentListComponent } from './component/teacher-instrument-list/teacher-instrument-list.component';
import { TeacherReferenteItemComponent } from './component/teacher-referente-item/teacher-referente-item.component';
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
    TeacherSubjectComponent,
    TeacherInstrumentItemComponent,
    TeacherReferentListComponent,
    TeacherInstrumentListComponent,
    TeacherReferenteItemComponent,
    StudentItemComponent,
    PageStudentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
