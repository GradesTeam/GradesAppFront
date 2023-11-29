import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherListResponse } from '../models/teacher-list.interface';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }
  getTeachers(page:number): Observable<TeacherListResponse>{
    return this.http.get<TeacherListResponse>(`${environment.apiBaseUrl}profesor/?page=${page}`,{
      headers:{
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
  }
}
