import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../../model/post-model';

@Injectable()
export class PostDetailService {
  private postDetailURL = 'mock-data/post-mock.json';

  constructor(private http: Http) { }

  getPost(id: number): Observable<Post> {
    return this.http.get(this.postDetailURL)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error || 'Serve error');
      })
  }

}
