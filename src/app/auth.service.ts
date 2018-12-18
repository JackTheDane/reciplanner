import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IUserLoginInfo } from './types/IUserLoginInfo';
import { coreApiUrl } from './config';
import { AppActions } from './app.actions';


// import { IAPIResponse } from './types/IAPIResponse';

// TODO: Make working AuthGuard Service to verify user login

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private appActions: AppActions
  ) {}

  login(userInfo: IUserLoginInfo): Observable<any> {
    const url = coreApiUrl + '/login';

    this.appActions.setLoggedIn(true);
    
    return this.http.post(url, JSON.stringify(userInfo));
  }

  logout(): void {

  }
}
