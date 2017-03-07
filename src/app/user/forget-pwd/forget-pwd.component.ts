import { Component, OnInit } from '@angular/core';

import { ForgetPwdService } from './services/forget-pwd.service';
import { User } from '../model/user-model';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {
  user: User = <User>{};
  message: string;
  messageType: string;

  constructor(private forgetPwdService: ForgetPwdService) { }

  ngOnInit() {
  }

  sendValidationEmail(): void {
    this.forgetPwdService.sendValidationEmail(this.user.email)
      .subscribe(
        res => {
          this.message = res.message;
          this.messageType = 'success';
        },
        error => {
          this.message = error.message;
          this.messageType = 'danger';
        }
      );
  }

}
