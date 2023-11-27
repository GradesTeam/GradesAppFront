import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectResponse } from '../models/subject.interface';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class SubjectItemService {
  constructor(private http: HttpClient) {}

  getAsignaturas(page: number): Observable<SubjectResponse> {
    return this.http.get<SubjectResponse>(
      `${environment.apiBaseUrl}/asignatura/?page=${page}`
    );
  }
}
