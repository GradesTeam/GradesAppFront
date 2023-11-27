import { Component, OnInit, inject } from '@angular/core';
import { InstrumentService } from '../../services/instrument.service';
import { AllInstrumentoDTO, InstrumentoListResponse } from '../../models/instrumento-list.interface';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private instrumentoService: InstrumentService,  private _sanitizer: DomSanitizer){
    this.asignaturaId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
      this.loadNewPage();
  }
  loadNewPage(){
    this.instrumentoService.getInstrumentosFromAsignatura(this.asignaturaId, this.page).subscribe(answ => {
      this.instrumentoList = answ.content;
      this.instrumentoInfo = answ;
    });
  }
}
