import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../enviroment/enviroment';
import { AlumnoDetailsResponse } from '../../models/alumno-details.interface';

@Component({
  selector: 'app-page-alumno-asignaturas',
  templateUrl: './page-alumno-asignaturas.component.html',
  styleUrl: './page-alumno-asignaturas.component.css'
})
export class PageAlumnoAsignaturasComponent implements OnInit{

  idAlumno!: string;
  alumno!: AlumnoDetailsResponse;
  nombreApellidos!: string;

  constructor(private alumnoService: AlumnoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null){
      this.idAlumno = idParam;
    }
    this.alumnoService.getAlumnoDetails(this.idAlumno).subscribe({
      next: data =>{
        this.alumno = data;
        this.nombreApellidos = this.alumno.nombre + ' ' + this.alumno.apellido;
      },error: err => {
        if(err.status = 404){
          window.location.href= `${environment.localHost}notfound`
        }
      }
      
    });
  }

  
}
