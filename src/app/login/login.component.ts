import { Component, OnInit } from '@angular/core';
import { UserService, IUserLoginInfo } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { IAPIResponse } from '../types/IAPIResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

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
    this.userService
      .attemptLogin(userInfo)
      .subscribe(
        (result: IAPIResponse) => {
          console.log('Res ', result);

          if (result && result.status === 200 ) {
            this.router.navigate(['/']);
          } else {
            this.snackBar.open(
              'Username or password incorrect'
            );
          }
        },
        error => {
          this.snackBar.open(
            'An error occured'
          );
        } 
      );
  }

}
