import { Component } from '@angular/core';
import { SubjectA } from '../../models/subject.interface';
import { PostAsignaturaDTO } from '../../models/created-asignatura.interface';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-page-subject-list',
  templateUrl: './page-subject-list.component.html',
  styleUrl: './page-subject-list.component.css',
})
export class PageSubjectListComponent {
  SubjectAList: SubjectA[] = [];
  page = 0;
  nombre: string = '';
  horas: number = 0;
  idProfe: string = '';
  descripcion: string = '';
  color: string = '';

  constructor(private asignaturaService: SubjectService) {}
  toSave() {
    let newAsig: PostAsignaturaDTO = new PostAsignaturaDTO(
      this.nombre,
      this.horas,
      this.idProfe,
      this.descripcion,
      this.color
    );
    this.asignaturaService.createdAsignatura(newAsig).subscribe({
      next: (data) => {
        window.location.href = 'http://localhost:4200/teacher/subject/';
      },
      error: (err) => {},
    });
  }
}
