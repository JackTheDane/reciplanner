import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { IUserLoginInfo } from '../types/IUserLoginInfo';
import { MatSnackBar } from '@angular/material';
import { IAPIResponse } from '../types/IAPIResponse';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    repeatedPassword: new FormControl('')
  });

  constructor(
    private userService: UserService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000
    });
  }

  private handleSubmit() {
    const {
      username,
      password,
      repeatedPassword
    } = this.registerForm.value;

    if ( password === repeatedPassword ) {
      const userInfo: IUserLoginInfo = {
        username: username,
        password: password
      };
      this.userService
        .registerNewUser(userInfo)
        .subscribe(
          (result: IAPIResponse) => {
            console.log('Res ', result);

            if (result && result.status === 200 ) {
              this.openSnackBar('User created!', 'Dismiss');
              this.registerForm.reset();
            } else {
              this.openSnackBar('User creation failed', 'Dismiss');
            }
          },
          error => {
            this.openSnackBar('User creation failed', 'Dismiss');
          } 
        );
    } else {
      // TODO: Add handling for non-matching passwords
    }
  }
}
