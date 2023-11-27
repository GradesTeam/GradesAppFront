import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoProfesorListResponse } from '../models/alumno-profesor-list.inteface';
import { environment } from '../enviroment/enviroment';

const API_BASE_URL = 'profesor';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  getAlumnoProfesor(id: string): Observable<AlumnoProfesorListResponse>{
    return this.http.get<AlumnoProfesorListResponse>(`${environment.apiBaseUrl}/${API_BASE_URL}/${id}/alumnos`);
  }
}
