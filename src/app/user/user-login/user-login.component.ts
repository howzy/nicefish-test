import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserLoginService } from './services/user-login.service';
import { User } from '../model/user-model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = <User>{};

  constructor(
    private router: Router,
    private userLoginService: UserLoginService
  ) { }

  ngOnInit() {
  }

  /** 登录 */
  doLogin(): void {
    console.log(this.user);
    this.userLoginService.login(this.user);
  }

  /** 注销 */
  doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl('home');
  }

  /** 跳转到找回密码页面 */
  forgetPwd():void {
    this.router.navigateByUrl('forgetPwd');
  }

}
