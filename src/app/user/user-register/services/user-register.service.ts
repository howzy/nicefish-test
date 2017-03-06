import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../../model/user-model';

@Injectable()
export class UserRegisterService {
  userRegisterURL = 'mock-data/user-register-mock.json';
  testEmailURL = '';
  subject: Subject<User> = new Subject<User>();

  constructor(private http: Http) { }

  get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  register(user: User) {
    console.log(user);

    // 向后台post数据的写法如下
    // let data = new URLSearchParams();
    // data.append('email', user.email);
    // data.append('password', user.password);
    // return this.http.post(this.userRegisterURL,data);

    return this.http.get(this.userRegisterURL)
      .map(res => {
        const resUser = res.json();
        localStorage.setItem('currentUser', JSON.stringify(resUser));
        this.subject.next(resUser);
      });
  }

  testEmail(email: string) {
    return this.http.get(this.testEmailURL)
      .map(res => res.json());
  }

}
