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
      Validators.maxLength(20),
      Validators.pattern(new RegExp('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$'))
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
    return this.getErrorMessageFor(this.username, 'Username')
      ? this.getErrorMessageFor(this.username, 'Username')
      : this.getErrorMessageFor(this.password, 'Password')
        ? this.getErrorMessageFor(this.password, 'Password')
        : this.getErrorMessageFor(this.repeatedPassword, 'Repeated Password');
  }

  private getErrorMessageFor(input: AbstractControl, fieldName: string = 'Field'): string {
    console.log(fieldName);

    try {
      if (input.invalid) {
        console.log('invalid');
        console.log(input.errors);

        let returnString = fieldName + ' ';


        if (input.errors.required) {
          returnString += 'must be filled';
        } else if (input.errors.minlength) {
          returnString += 'must be at least 3 letters';
        } else if (input.errors.maxlength) {
          returnString += 'cannot be more than 20 letters';
        } else if (input.errors.pattern) {
          returnString += 'must contain both letters (A-Z) and numbers (0-9)';
        }

        return returnString;

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
      this.openSnackBar('Passwords must match', 'Dismiss');
      // TODO: Add handling for non-matching passwords
    }
  }
}
