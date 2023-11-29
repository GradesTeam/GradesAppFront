import { Component, Input } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/get-alumno-item.interface';
import { AlumnoP } from '../../models/alumno-profesor-list.inteface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent{
  
  @Input() list: AlumnoP[] = [];
  constructor(private alumnoService: AlumnoService) { }

  openModalWithAlumnoDetails(alumno: Alumno) {
    // Lógica para abrir el modal con los detalles del alumno
  }

  editarEstudiante(id: string) {
    this.alumnoService.getAlumnoDetails(id).subscribe((alumno: Alumno) => {
      this.openModalWithAlumnoDetails(alumno);
      console.log(alumno.id)
    });
  }
}
