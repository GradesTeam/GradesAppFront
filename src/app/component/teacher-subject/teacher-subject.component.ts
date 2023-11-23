import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../../services/instrument.service';
import { InstrumentoListResponse } from '../../models/instrumento-list.interface';

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrl: './teacher-subject.component.css'
})
export class TeacherSubjectComponent implements OnInit{
  instrumentoList!: InstrumentoListResponse[];

  constructor(private instrumentoService: InstrumentService){}

  ngOnInit(): void {
      this.instrumentoService.getInstrumentosFromAsignatura("6c67fdf2-bf8d-43fb-8223-fb6285667a31").subscribe()
  }

}
