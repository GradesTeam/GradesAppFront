import { Component, Input, TemplateRef, inject } from '@angular/core';
import { AllReferenteDTO } from '../../models/referente-list.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferentsService } from '../../services/referents.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-referente-item',
  templateUrl: './teacher-referente-item.component.html',
  styleUrl: './teacher-referente-item.component.css'
})
export class TeacherReferenteItemComponent {
  @Input() referente !: AllReferenteDTO;
  asignaturaId: string = "";
  route: ActivatedRoute = inject(ActivatedRoute);
  desc: string = '';
  descErr: string = "";
  codRefEdit: string = "";
  descEdit: string = "";
   constructor(private modalService: NgbModal, private referenteService:ReferentsService){
    this.codRefEdit = this.referente.codReferente;
    this.descEdit = this.referente.descripcion;
    this.asignaturaId = this.route.snapshot.params['id'];
   }

  open(content: TemplateRef<any>) {
    this.modalService.open(content);
  }
  toSave(){
    this.referenteService.editReferente(this.asignaturaId, this.referente.codReferente, this.desc).subscribe({
      next: data => {
        window.location.href = window.location.href = "http://localhost:4200/teacher/subject/"+this.asignaturaId+"?instrumento=false";
      },error: err =>{
        if(err.status == 400){
          let badReq = err.error;
          let errors = badReq.body.fields_errors;
          errors.forEach((error: { field: string; message: string; }) => {
            this.descErr = error.message;
          });
        } 
      }
    });
  }
}
