import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentService } from '../services/comment.service';
import { Comment } from '../model/comment-model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  comments: Array<Comment>;

  constructor(private commentService: CommentService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getCommentList(params['postId'])
    );
  }

  getCommentList(postId: number) {
    this.commentService.getCommentList(postId)
      .subscribe(
        res => this.comments = res['items'],
        error => console.log(error)
      );
  }

}
