import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coreApiUrl } from './config';
import { Observable } from 'rxjs';
import { IUserLoginInfo } from './types/IUserLoginInfo';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  registerNewUser(userInfo: IUserLoginInfo): Observable<any> {
    const url = coreApiUrl + '/create-user';
    return this.http.post(url, JSON.stringify(userInfo));
  }

}
