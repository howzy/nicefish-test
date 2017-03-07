import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../model/user-model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input()
    panelTitle: string;

  @Output()
    follow: EventEmitter<string> = new EventEmitter<string>();

  currentUser: User = <User>{};

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  followBtnClick() {
    this.follow.emit('follow');
  }

}
