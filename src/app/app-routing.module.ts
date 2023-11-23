import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { SubjectListComponent } from './ui/subject-list/subject-list.component';
import { StudentDetailsComponent } from './ui/student-details/student-details.component';
import { SubjectDetailsComponent } from './ui/subject-details/subject-details.component';
import { InstrumentListComponent } from './ui/instrument-list/instrument-list.component';
import { StudentMarksComponent } from './ui/student-marks/student-marks.component';
import { InstrumentDetailsComponent } from './ui/instrument-details/instrument-details.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { PageTestNonoComponent } from './ui/page-test-nono/page-test-nono.component';
import { StudentListComponent } from './component/student-list/student-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'student', component: SubjectListComponent},
  {path: 'student/subject/:id', component: StudentMarksComponent},
  {path: 'teacher', component: SubjectListComponent},
  {path: 'teacher/students', component: StudentListComponent},
  {path: 'teacher/subject/:id', component: SubjectDetailsComponent},
  {path: 'teacher/subject/:id/instruments', component: InstrumentListComponent},
  {path: 'teacher/student/:id', component: StudentDetailsComponent},
  {path: 'teacher/subject/instrument/:id', component: InstrumentDetailsComponent},
  {path: 'test', component: PageTestNonoComponent},
  {path: '', component: SubjectListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
