import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doFollow() {
    alert('自己不能关注自己！');
  }

}
