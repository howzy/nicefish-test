import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  searchText: string;
  postList: Array<Post>;
  // postPage: PostPage;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private postlistService: PostlistService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPostList(this.searchText, this.currentPage);
    });
  }

  getPostList(searchText: string, page: number) {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;

    this.postlistService.getPostList(null, 1).subscribe(res => {
      this.totalItems = res.total;
      this.postList = res.items.splice(offset, end > this.totalItems ? this.totalItems : end);
      console.log(this.postList);
    }, error => {
      console.log(error);
    });
  }

  pageChanged(event: any): void {
    // console.log('Page changed to: ' + event.page);
    // console.log('Number items per page: ' + event.itemsPerPage);
    // this.router.navigate(['posts/page/', event.page]);
    this.router.navigateByUrl('posts/page/' + event.page);
  }

}
