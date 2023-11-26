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

  createStudent(username: string, name: string, surname: string, password: string): Observable<UserResponse>{
    return this.http.post<UserResponse>(`${environment.apiBaseUrl}/student/register`,
    {
      "username": username,
      "nombre": name,
      "apellidos": surname,
      "password": password
    }
    );
  }
}
