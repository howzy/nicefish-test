import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PostlistService } from './services/postlist.service';
import { Post } from '../model/post-model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  maxSize: number = 5;
  itemsPerPage = 5;
  currentPage: number = 1;
  totalItems: number;

  postList: Array<Post>;
  searchText: string;
  searchTextStream: Subject<string> = new Subject<string>();

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private postlistService: PostlistService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPostList(this.searchText, this.currentPage);
    });

    this.searchTextStream
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(searchText => {
          console.log(this.searchText);
          this.getPostList(this.searchText, this.currentPage);
        });
  }

  /** 获取列表 */
  getPostList(searchText: string, page: number) {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;

    this.postlistService.getPostList(searchText, page).subscribe(res => {
      this.totalItems = res.total;
      this.postList = res.items.splice(offset, end > this.totalItems ? this.totalItems : end);
      console.log(this.postList);
    }, error => {
      console.log(error);
    });
  }

  /** 导航 */
  pageChanged(event: any): void {
    this.router.navigateByUrl('posts/page/' + event.page);
  }

  /** 搜索 */
  searchChanged($event): void {
    this.searchTextStream.next(this.searchText);
  }

  /** 发布文章 */
  gotoWrite() {
    this.router.navigateByUrl('user/write');
  }

}
