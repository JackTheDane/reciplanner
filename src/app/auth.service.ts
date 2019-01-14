import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IUserLoginInfo } from './types/IUserLoginInfo';
import { coreApiUrl } from './config';


@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  login(userInfo: IUserLoginInfo): Observable<any> {
    const url = coreApiUrl + '/login';

    return this.http.post(url, JSON.stringify(userInfo));
  }
}
