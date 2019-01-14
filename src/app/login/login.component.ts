import { Component, OnInit } from '@angular/core';
import { IUserLoginInfo } from '../types/IUserLoginInfo';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { IAPIResponse } from '../types/IAPIResponse';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserActions } from '../user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoading: boolean;

  loginForm = new FormGroup({
    username: new FormControl({
      value: '',
      disabled: this.isLoading
    }),
    password: new FormControl({
      value: '',
      disabled: this.isLoading
    }),
  });

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private router: Router,
    private userActions: UserActions
  ) {
    this.isLoading = false;
  }

  ngOnInit() {
  }

  private handleSubmit() {
    const {
      username,
      password
    } = this.loginForm.value;

    const userInfo: IUserLoginInfo = {
      username: username,
      password: password
    };

    this.isLoading = true;

    this.authService
      .login(userInfo)
      .subscribe(
        (result: IAPIResponse) => {
          console.log('Res ', result);
          this.isLoading = false;

          if (result && result.status === 200 ) {
            console.log(result.result);

            try {
              const parsedUserInfo: {
                id: string; 
                username: string
              } = JSON.parse(result.result);

              this.userActions.logUserIn(parsedUserInfo);

              this.snackBar.open(
                `Welcome back, ${parsedUserInfo.username}`,
                '',
                {
                  duration: 2000
                }
              );
              this.router.navigate(['/']);

            } catch (error) {
              console.log(error);
              this.snackBar.open(
                'An error occured',
                'Dismiss',
                {
                  duration: 5000
                }
              );
            }
            
            // this.userActions.setLoggedIn(true);

          } else {
            this.snackBar.open(
              'Username or password incorrect',
              'Dismiss',
              {
                duration: 5000
              }
            );
          }
        },
        error => {
          this.isLoading = false;
          console.log(error);
          this.snackBar.open(
            'An error occured',
            'Dismiss',
            {
              duration: 5000
            }
          );
        } 
      );
  }

}
