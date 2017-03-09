import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  maxSize: number = 5;
  itemsPerPage: number = 5;
  totalItems: number = 15;
  currentPage: number = 1;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getUsersByPage(params['page'])
    );
  }

  getUsersByPage(page: Number): void {
    console.log('页码>' + page);
  }

  pageChanged(event): void {
    this.router.navigateByUrl('manage/usertable/page/' + event.page);
  }

  newUser(): void {
    this.router.navigateByUrl('manage/usertable/newuser');
  }

  blockUser(userId: Number): void {
    console.log(userId);
  }

  unBlockUser(userId: Number): void {
    console.log(userId);
  }

  resetPwd(userId: Number): void {
    console.log(userId);
  }
}
