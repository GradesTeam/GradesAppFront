import { Component } from '@angular/core';
import { AlumnoP } from '../../models/alumno-profesor-list.inteface';

@Component({
  selector: 'app-page-student-list',
  templateUrl: './page-student-list.component.html',
  styleUrl: './page-student-list.component.css'
})
export class PageStudentListComponent {

  alumnoPList: AlumnoP[] = [];
  page = 0;
}
