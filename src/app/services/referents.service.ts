import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReferenteListResponse } from '../models/referente-list.interface';
import { environment } from '../enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferentsService {

  constructor(private http: HttpClient) { }

  getReferentesFromAsignatura(id:string, page:number):Observable<ReferenteListResponse>{
    return this.http.get<ReferenteListResponse>(`http://${environment.apiBaseUrl}asignatura/${id}/referentes?page=${page}`);
  }
}
