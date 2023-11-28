import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReferenteListResponse } from '../models/referente-list.interface';
import { environment } from '../enviroment/enviroment';
import { Observable } from 'rxjs';
import { POSTReferenteDTO } from '../models/create-referente.interface';
import { CreatedReferenteResponse } from '../models/create-referente-request.interface';

@Injectable({
  providedIn: 'root',
})
export class ReferentsService {
  constructor(private http: HttpClient) {}

  getReferentesFromAsignatura(
    id: string,
    page: number
  ): Observable<ReferenteListResponse> {
    return this.http.get<ReferenteListResponse>(
      `${environment.apiBaseUrl}teacher/asignatura/${id}/referentes?page=${page}`
    );
  }
  createReferente(id: string, newRef: POSTReferenteDTO): Observable<any> {
    return this.http.post<CreatedReferenteResponse>(
      `${environment.apiBaseUrl}teacher/asignatura/${id}/referente`,
      {
        codReferente: newRef.codReferente,
        descripcion: newRef.descripcion,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
