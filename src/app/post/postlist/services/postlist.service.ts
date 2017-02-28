import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post, PostPage } from '../.././model/post-model';

@Injectable()
export class PostlistService {
  private postListURL = 'mock-data/postlist-mock.json';
  private postListSearchURL = 'mock-data/postlist-search-mock.json';

  constructor(private http: Http) { }

  getPostList(searchText: string, page: number): Observable<PostPage> {
    let url = this.postListURL;
    const params = new URLSearchParams();
    if (searchText) {
      params.append('searchText', searchText);
      url = this.postListSearchURL;
    }
    params.append('page', page + '');
    return this.http.get(url, { search: params }).map(res => res.json())
      .catch(error => {
        return Observable.throw(error || 'Serve error');
      });
  }
}
