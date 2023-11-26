import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { ReferentsService } from '../../services/referents.service';
import { AllReferenteDTO, ReferenteListResponse } from '../../models/referente-list.interface';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { POSTReferenteDTO } from '../../models/create-referente.interface';

@Component({
  selector: 'app-teacher-referent-list',
  templateUrl: './teacher-referent-list.component.html',
  styleUrl: './teacher-referent-list.component.css',
  providers: [NgbModalConfig, NgbModal]
})
export class TeacherReferentListComponent implements OnInit{

  referenteList!: AllReferenteDTO[];
  referenteInfo !: ReferenteListResponse;
  page:number = 0;
  route: ActivatedRoute = inject(ActivatedRoute);
  asignaturaId: string = '';
  codRef: string = "";
  desc: string = '';

  constructor(private referenteService: ReferentsService, private modalService: NgbModal){
    this.asignaturaId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
      this.loadNewPage();
  }
  loadNewPage(){
    this.referenteService.getReferentesFromAsignatura(this.asignaturaId, this.page).subscribe(answ => {
      this.referenteList = answ.content;
      console.log(this.referenteList);
      this.referenteInfo = answ;
    });
  }

  open(content: TemplateRef<any>) {
      this.modalService.open(content);
  }

  toSave(){
    let newRef: POSTReferenteDTO = new POSTReferenteDTO(this.codRef, this.desc);
    this.referenteService.createReferente(this.asignaturaId, newRef).subscribe(ans => {
      if(ans instanceof POSTReferenteDTO){
        window.location.href = "https://localhost:4200/teacher/subject/"+ this.asignaturaId;
      }else{
        console.log("hola mundo")
      }
    });
  }

  
}
