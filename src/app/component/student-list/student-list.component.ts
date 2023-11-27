import { Component, Input, OnInit } from '@angular/core';
import { AlumnoP } from '../../models/alumno-profesor-list.inteface';
import { AlumnoService } from '../../service/alumno.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent{
  
  @Input() list: any;

}
