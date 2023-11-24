import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstrumentoListResponse } from '../models/instrumento-list.interface';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor(private http: HttpClient) { }

  getInstrumentosFromAsignatura(id:string, page:number):Observable<InstrumentoListResponse>{
    return this.http.get<InstrumentoListResponse>(`http://${environment.apiBaseUrl}asignatura/${id}/instrumentos?page=${page}`);
  }
}
