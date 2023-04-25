import { IUser, IUserLoginFormData } from './user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = 'http://127.0.0.1:3001/user'

  constructor(
    private http: HttpClient
  ) { }

  createUser(userData: IUserLoginFormData): Observable<IUser> {
    return this.http.post<IUser>(this.path, userData)
  }

  authorization(userData: IUserLoginFormData): Observable<IUser> {
    return this.http.post<IUser>(this.path + '/auth', userData)
  }

}
