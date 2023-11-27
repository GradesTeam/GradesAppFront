import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { AlumnoP } from '../../models/alumno-profesor-list.inteface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { POSTAlumnoDTO } from '../../models/create-alumno.interface';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-page-student-list',
  templateUrl: './page-student-list.component.html',
  styleUrl: './page-student-list.component.css'
})
export class PageStudentListComponent implements OnInit{
  teacherId: string = '';
  route: ActivatedRoute = inject(ActivatedRoute);
  alumnoPList: AlumnoP[] = [];
  page = 0;
  nombre: string = '';
  apellidos: string = '';
  fechaNacimiento!:Date;
  email: string = '';
  telefono: string = '';
  username: string = '';
  password: string = '';

  

  constructor(private alumnoService: AlumnoService, private modalService: NgbModal){
    this.teacherId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.alumnoService.getAlumnoProfesor(this.teacherId).subscribe(resp => {
      this.alumnoPList = resp.content;
    });
  }

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}
  


  crearAlumno(){
    let nuevoAlumno: POSTAlumnoDTO = new POSTAlumnoDTO(this.nombre, this.apellidos, this.fechaNacimiento, this.email, this.telefono, this.username, this.password);
    this.alumnoService.createAlumno(nuevoAlumno).subscribe(resp =>{
      });
  }

}
