import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { IUserLoginInfo } from '../types/IUserLoginInfo';
import { MatSnackBar } from '@angular/material';
import { IAPIResponse } from '../types/IAPIResponse';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    repeatedPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ])
  });

  constructor(
    private userService: UserService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
  }

  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get repeatedPassword() { return this.registerForm.get('repeatedPassword'); }

  public getErrorMessage(): string {
    return this.getErrorMessageFor(this.username)
      ? this.getErrorMessageFor(this.username)
      : this.getErrorMessageFor(this.password)
        ? this.getErrorMessageFor(this.password)
        : this.getErrorMessageFor(this.repeatedPassword);
  }

  private getErrorMessageFor(input: AbstractControl): string {
    console.log('addasd');
    try {
      if (input.invalid) {
        console.log('invalid');

        console.log(input.errors);


        if (input.errors.required) {
          return 'Field must be filled';
        } else if (input.errors.minlength) {
          return 'Field must be at least 3 letters';
        } else if (input.errors.maxlength) {
          return 'Field cannot be more than 20 letters';
        }

      }

      return null;
    } catch (error) {
      console.log(error);
    }
  }

  public checkForErrors(): boolean {
    return (
      (this.username.invalid && this.username.touched) ||
      (this.password.invalid && this.password.touched) ||
      (this.repeatedPassword.invalid && this.repeatedPassword.touched)
    );
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
              this.router.navigate(['/sign-in']);
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
