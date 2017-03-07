import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ForgetPwdService {
  validateEmailURL = 'mock-data/forget-pwd-mock.json';

  constructor(private http: Http) { }

  sendValidationEmail(email: string): Observable<any> {
    return this.http.get(this.validateEmailURL)
      .map(res => res.json())
      .catch(error => {
        return Observable.throw(error || 'Serve error');
      });
  }

}
