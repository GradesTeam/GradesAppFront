import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnoP } from '../../models/alumno-profesor-list.inteface';
import { Alumno } from '../../models/get-alumno-item.interface';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css'
})
export class StudentItemComponent {

  @Input() alumno!: AlumnoP;
  @Output() editarAlumno: EventEmitter<string> = new EventEmitter<string>();

  onEditarClick() {
    this.editarAlumno.emit(this.alumno.id);
  }
}
