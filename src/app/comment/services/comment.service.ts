import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Comment } from '../model/comment-model';

@Injectable()
export class CommentService {
  private commentListURL = 'mock-data/comment-mock.json';

  constructor(private http: Http) { }

  getCommentList(postId: number): Observable<Comment[]> {
    return this.http.get(this.commentListURL)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error || 'Serve error');
      });
  }
}
