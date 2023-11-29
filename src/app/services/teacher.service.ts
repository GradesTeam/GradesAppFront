import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeacherListResponse } from '../models/teacher-list-response';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getAllTeacher(): Observable<TeacherListResponse> {
    return this.http.get<TeacherListResponse>(`${environment.apiBaseUrl}profesor`);
  }

  getTeacherListByPage(page: number): Observable<TeacherListResponse> {
    return this.http.get<TeacherListResponse>(`${environment.apiBaseUrl}profesor?page=` + page);
  }
}
