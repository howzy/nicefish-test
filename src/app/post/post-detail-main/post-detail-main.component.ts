import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserLoginService } from '../../user/user-login/services/user-login.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../user/model/user-model';

@Component({
  selector: 'app-post-detail-main',
  templateUrl: './post-detail-main.component.html',
  styleUrls: ['./post-detail-main.component.css']
})
export class PostDetailMainComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  currentUser: User;

  constructor(
    private router: Router,
    private userLoginService: UserLoginService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.subscription = this.userLoginService.currentUser
      .subscribe(
        data => {
          if (data && data.userName) {
            this.currentUser = data;
          } else {
            this.currentUser = null;
          }
          // if (this.router.url.indexOf('/login') === -1) {
          //   alert('用户登录成功，可以隐藏登录面板了！');
          // }
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  doFollow() {
    alert('父组件监听子组件的事件...');
  }

}
