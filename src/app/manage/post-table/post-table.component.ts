import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

import { PostTableService } from './services/post-table.service';
import { Post } from '../../post/model/post-model';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  postList: Array<Post> = [];
  maxSize: number = 5;
  itemsPerPage: number = 5;
  totalItems: number = 15;
  currentPage: number = 1;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postTableService: PostTableService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getPostsByPage(params['page'])
    );
  }

  getPostsByPage(page: number) {
    this.postTableService.getPostTable()
      .subscribe(
      res => {
        this.postList = res.items;
      },
      error => { console.log(error); }
      );
  }

  pageChanged(event: any) {
    const urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0] + '/posttable/page/' + event.page);
  }

  goToWrite() {
    this.router.navigateByUrl('user/write');
  }

  editPost(event) {
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const value = nameAttr.nodeValue;
    console.log('postId>' + value);
  }

  top(event) {
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const value = nameAttr.nodeValue;
    console.log('postId>' + value);
  }

  unTop(event) {
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const value = nameAttr.nodeValue;
    console.log('postId>' + value);
  }

  delPost(event) {
    const target = event.currentTarget;
    const nameAttr = target.attributes.name;
    const value = nameAttr.nodeValue;
    console.log('postId>' + value);
  }

}
