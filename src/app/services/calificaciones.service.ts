import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalificacionesInstrumentoResponse } from '../models/calificaciones-instrumento.interface';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

  constructor(private http: HttpClient) { }

  getInstrumentoDetails(id:string):Observable<CalificacionesInstrumentoResponse>{
    return this.http.get<CalificacionesInstrumentoResponse>(`${environment.apiBaseUrl}teacher/instrumento/${id}/calificaciones`);
  }
}
