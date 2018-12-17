import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coreApiUrl } from './config';
import { Observable } from 'rxjs';

export interface IUserLoginInfo {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  registerNewUser(userInfo: IUserLoginInfo): Observable<any> {
    const url = coreApiUrl + '/create-user';
    return this.http.post(url, JSON.stringify(userInfo));
  }

  attemptLogin(userInfo: IUserLoginInfo): Observable<any> {
    const url = coreApiUrl + '/login';
    return this.http.post(url, JSON.stringify(userInfo));
  }
}
