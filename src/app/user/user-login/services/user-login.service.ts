import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../../model/user-model';

@Injectable()
export class UserLoginService {
  userLoginURL = 'mock-data/user-login-mock.json';
  subject: Subject<User> = new Subject<User>();

  constructor(private http: Http) { }

  get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  login(user: User) {
    return this.http.get(this.userLoginURL)
      .map(res => {
        const resUser = res.json();
        console.log('user object>' + resUser);
        if (resUser && resUser.token) {
          localStorage.setItem('currentUser', JSON.stringify(resUser));
          this.subject.next(resUser);
        }
        return res;
      })
      .subscribe(
        data => console.log('login success' + data),
        error => console.log(error)
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(null);
  }

}
