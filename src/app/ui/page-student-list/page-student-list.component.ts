import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { AlumnoP } from '../../models/alumno-profesor-list.inteface';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  fechaNacimiento!:NgbDateStruct;
  email: string = '';
  telefono: string = '';
  username: string = '';
  password: string = '';
  nombreError: string = '';
  apellidosError: string = '';
  fechaNacimientoError: string = '';
  emailError: string = '';
  telefonoError: string = '';
  usernameError: string = '';
  passwordError: string = '';

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
    let getDia = this.fechaNacimiento.day.toString().split('').length > 1? this.fechaNacimiento.day.toString(): "0"+this.fechaNacimiento.day;
    let getMes = this.fechaNacimiento.month.toString().split('').length > 1? this.fechaNacimiento.month.toString(): "0"+this.fechaNacimiento.month;
    let fechaNacimientoConv: string = this.fechaNacimiento.year + "-" + getMes + "-" + getDia;
    let nuevoAlumno: POSTAlumnoDTO = new POSTAlumnoDTO(this.nombre, this.apellidos, fechaNacimientoConv, this.email, this.telefono, this.username, this.password);
    console.log(this.fechaNacimiento);
    console.log(getDia);
    console.log(getMes);
    this.alumnoService.createAlumno(nuevoAlumno).subscribe({
      next: resp => {
        window.location.href = "http://localhost:4200/teacher/"+this.teacherId+"/student";
      }, error: error =>{
        if(error.status = 400){
          this.nombreError = '';
          this.apellidosError = '';
          this.fechaNacimientoError = '';
          this.emailError = '';
          this.telefonoError = '';
          this.usernameError = '';
          this.passwordError = '';
          let badRequest = error;
          let errors = badRequest.error.body.fields_errors;
          errors.forEach((erro: {field: any; message: any;}) => {
            if(erro.field == ''){
              
            }
          });
        }
      }
      });
  }

}
