import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReferenteListResponse } from '../models/referente-list.interface';
import { environment } from '../enviroment/enviroment';
import { Observable } from 'rxjs';
import { POSTReferenteDTO } from '../models/create-referente.interface';
import { BadRequestReferenteResponse } from '../models/bad-request-referente.interface';

@Injectable({
  providedIn: 'root'
})
export class ReferentsService {

  constructor(private http: HttpClient) { }

  getReferentesFromAsignatura(id:string, page:number):Observable<ReferenteListResponse>{
    return this.http.get<ReferenteListResponse>(`http://${environment.apiBaseUrl}teacher/asignatura/${id}/referentes?page=${page}`);
  }
  createReferente(id:string, newRef: POSTReferenteDTO):Observable<POSTReferenteDTO|BadRequestReferenteResponse>{
    return this.http.post<POSTReferenteDTO|BadRequestReferenteResponse>(`http://${environment.apiBaseUrl}teacher/asignatura/${id}/referente`, 
    {
      codReferente: newRef.codReferente,
      descripcion: newRef.descripcion
    },
    {}
    );
  }
}
