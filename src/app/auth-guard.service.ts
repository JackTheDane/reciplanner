import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate, 
  // RouterStateSnapshot,
  // ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) {}

  canActivate(): Promise<boolean> {

    return new Promise( (resolve) => {
      this.ngRedux
        .select(res => res.userInfo.isLoggedIn)
        .subscribe((logInStatus: boolean) => {
          if (logInStatus) {
            resolve(true);
          } else {
            this.router.navigate(['/join']);
            resolve(false);
          }
        },
        error => { resolve(false); }); 
    });
  }
}
