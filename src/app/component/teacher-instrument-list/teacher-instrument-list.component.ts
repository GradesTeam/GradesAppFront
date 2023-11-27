import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { InstrumentService } from '../../services/instrument.service';
import { AllInstrumentoDTO, InstrumentoListResponse } from '../../models/instrumento-list.interface';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { POSTInstrumentoDTO } from '../../models/create-instrumento.interface';
import { ReferentsService } from '../../services/referents.service';
import { AllReferenteDTO } from '../../models/referente-list.interface';

@Component({
  selector: 'app-teacher-instrument-list',
  templateUrl: './teacher-instrument-list.component.html',
  styleUrl: './teacher-instrument-list.component.css'
})
export class TeacherInstrumentListComponent implements OnInit{
  instrumentoList!: AllInstrumentoDTO[];
  instrumentoInfo !: InstrumentoListResponse;
  page:number = 0;
  route: ActivatedRoute = inject(ActivatedRoute);
  asignaturaId: string = '';
  name: string = "";
  nameErr: string = "";
  contents: string = "";
  contentErr: string ="";
  date: number = Date.now();
  referenteList!: AllReferenteDTO[];
  codReferentes : string[] = [];
  


  constructor(private instrumentoService: InstrumentService, private modalService: NgbModal, private referenteService: ReferentsService){
    this.asignaturaId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
      this.loadNewPage();
      this.referenteService.getReferentesFromAsignatura(this.asignaturaId, this.page).subscribe(answ => {
        this.referenteList = answ.content;
      });
  }
  loadNewPage(){
    this.instrumentoService.getInstrumentosFromAsignatura(this.asignaturaId, this.page).subscribe(answ => {
      this.instrumentoList = answ.content;
      this.instrumentoInfo = answ;
    });
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content);
  }
  toSave(){
    let newIns: POSTInstrumentoDTO = new POSTInstrumentoDTO(this.name, this.contents, this.date, this.codReferentes); 
    this.instrumentoService.createInstrumentosFromAsignatura(this.asignaturaId, newIns).subscribe({
      next: data => {
        alert("ole ole");
      },
      error: err => {
        console.log(err);
        alert("nonono");
      }
    });
  }
  addToReferentes(codRef: string, event:any ){
    if(event.target.checked){
      this.codReferentes.push(codRef);
    }else{
      this.codReferentes.splice(this.codReferentes.indexOf(codRef));
    }
  }
}
