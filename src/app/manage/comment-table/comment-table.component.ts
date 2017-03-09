import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.css']
})
export class CommentTableComponent implements OnInit {
  maxSize: number = 5;
  itemsPerPage: number = 5;
  totalItems: number = 15;
  currentPage: number = 1;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getCommentsByPage(params['page'])
    );
  }

  getCommentsByPage(page: Number): void {
    console.log('页码>' + page);
  }

  pageChanged(event: any): void {
    const urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0] + '/commenttable/page/' + event.page);
  }

  delComment(commentId: Number): void {
    console.log(commentId);

  }
}
