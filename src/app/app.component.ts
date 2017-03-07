import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import './operators';

import { UserLoginService } from './user/user-login/services/user-login.service';
import { UserRegisterService } from './user/user-register/services/user-register.service';
import { User } from './user/model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: User = <User>{};
  globalClickCallbackFn: Function;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public renderer: Renderer,
    public elementRef: ElementRef,
    private userLoginService: UserLoginService,
    private userRegisterService: UserRegisterService,
  ) { }

  ngOnInit() {
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', event => {
      console.log('全局监听点击事件>' + event);
    });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.userLoginService.currentUser
      .merge(this.userRegisterService.currentUser)
      .subscribe(
        data => {
          this.currentUser = data;

          // 如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
          if (this.router.url.indexOf('/login') !== -1) {
            this.router.navigateByUrl('home');
          }
        },
        error => console.log(error)
      );
  }

  doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl('');
  }
}
