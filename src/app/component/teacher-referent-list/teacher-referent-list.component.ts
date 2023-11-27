import { Component, OnInit, inject } from '@angular/core';
import { ReferentsService } from '../../services/referents.service';
import { AllReferenteDTO, ReferenteListResponse } from '../../models/referente-list.interface';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-teacher-referent-list',
  templateUrl: './teacher-referent-list.component.html',
  styleUrl: './teacher-referent-list.component.css'
})
export class TeacherReferentListComponent implements OnInit{
  referenteList!: AllReferenteDTO[];
  referenteInfo !: ReferenteListResponse;
  page:number = 0;
  route: ActivatedRoute = inject(ActivatedRoute);
  asignaturaId: string = '';

  constructor(private referenteService: ReferentsService,  private _sanitizer: DomSanitizer){
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
}
