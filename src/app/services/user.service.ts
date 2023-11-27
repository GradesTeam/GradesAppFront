import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user.interface';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createStudent(username: any, fecha: any, email: any, password: any, repeatPassword: any): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.apiBaseUrl}student/register`,
      {
        "username": username,
        "email": email,
        "password": password,
        "repeatPassword": repeatPassword,
        "date": fecha
      }
    );
  }
}
