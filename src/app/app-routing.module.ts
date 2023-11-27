import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { PageSubjectListComponent } from './ui/page-subject-list/page-subject-list.component';
import { StudentDetailsComponent } from './ui/student-details/student-details.component';
import { SubjectDetailsComponent } from './ui/subject-details/subject-details.component';
import { InstrumentListComponent } from './ui/instrument-list/instrument-list.component';
import { StudentMarksComponent } from './ui/student-marks/student-marks.component';
import { InstrumentDetailsComponent } from './ui/instrument-details/instrument-details.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { PageStudentListComponent } from './ui/page-student-list/page-student-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student', component: PageSubjectListComponent },
  {path: 'teacher/:id/student', component: PageStudentListComponent},
  { path: 'student/subject/:id', component: StudentMarksComponent },
  { path: 'teacher', component: PageSubjectListComponent },
  { path: 'teacher/students', component: StudentListComponent },
  { path: 'teacher/subject/:id', component: SubjectDetailsComponent },
  {
    path: 'teacher/subject/:id/instruments',
    component: InstrumentListComponent,
  },
  { path: 'teacher/student/:id', component: StudentDetailsComponent },
  {
    path: 'teacher/subject/instrument/:id',
    component: InstrumentDetailsComponent,
  },
  { path: '', component: PageSubjectListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
