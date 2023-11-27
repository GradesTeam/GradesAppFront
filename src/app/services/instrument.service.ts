import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstrumentoListResponse } from '../models/instrumento-list.interface';
import { environment } from '../enviroment/enviroment';
import { CreateInstrumentResponse } from '../models/create-instrumento-request.interface';
import { POSTInstrumentoDTO } from '../models/create-instrumento.interface';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor(private http: HttpClient) { }

  getInstrumentosFromAsignatura(id:string, page:number):Observable<InstrumentoListResponse>{
    return this.http.get<InstrumentoListResponse>(`${environment.apiBaseUrl}/teacher/asignatura/${id}/instrumentos?page=${page}`);
  }
  createInstrumentosFromAsignatura(id:string, newIns: POSTInstrumentoDTO):Observable<CreateInstrumentResponse>{
    return this.http.post<CreateInstrumentResponse>(``,
    {
      nombre: newIns.nombre,
      fecha: newIns.fecha,
      contenidos: newIns.contenidos,
      referentes: newIns.referentes
    },
      {
        headers:{
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
