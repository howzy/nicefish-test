import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PostPage } from '../../../post/model/post-model';

@Injectable()
export class PostTableService {
  postTableURL = 'mock-data/postlist-mock.json';
  deleteURL = '';
  editURL = '';

  constructor(private http: Http) { }

  /** 获取文章列表 */
  getPostTable(): Observable<PostPage> {
    return this.http.get(this.postTableURL)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error || 'Serve error');
      });
  }

  /** 删除文章 */
  delete(postId: number) {
    return this.http.delete(this.deleteURL)
      .map(res => res)
      .catch(error => {
        return Observable.throw(error || 'Serve error');
      });
  }

  /** 编辑文章 */
  edit(postId: number) {
    return this.http.get(this.editURL)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error || 'Serve error');
      });
  }
}
