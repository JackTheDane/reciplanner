import { Component, OnInit } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { AppActions } from '../app.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;
  public name: string;

  constructor(
    private appActions: AppActions,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.ngRedux.select( res => res.userInfo).subscribe(
      (info) => {
        this.isLoggedIn = info.isLoggedIn;

        if (info.name) {
          const name: string = info.name[0].toUpperCase() + info.name.substr(1);
          this.name = name;
        }
      }
    );
  }
    
  ngOnInit() {
  }

  public onLogoutClick() {
    this.appActions.setLoggedIn(false);
  }

}
