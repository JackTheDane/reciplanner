import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IUserLoginInfo } from './types/IUserLoginInfo';
import { coreApiUrl } from './config';
import { UserActions } from './user.actions';


// import { IAPIResponse } from './types/IAPIResponse';

// TODO: Make working AuthGuard Service to verify user login

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private userActions: UserActions
  ) {}

  login(userInfo: IUserLoginInfo): Observable<any> {
    const url = coreApiUrl + '/login';

    return this.http.post(url, JSON.stringify(userInfo));
  }
}
