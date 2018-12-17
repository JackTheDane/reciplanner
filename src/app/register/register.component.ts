import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { IUserLoginInfo } from '../types/IUserLoginInfo';

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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  handleSubmit() {
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
      console.log(userInfo);
      this.userService
        .registerNewUser(userInfo)
        .subscribe(
          result => {
            console.log('woop ', result);
          }
        );
    } else {
      // TODO: Add handling for non-matching passwords
    }
  }
}
