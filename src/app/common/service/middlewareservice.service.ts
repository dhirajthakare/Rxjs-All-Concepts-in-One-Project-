import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiddlewareserviceService {
  constructor(private http: HttpClient, private loader: LoadingBarService) {}
  exclusive: any = new Subject();
  usern: string = 'dhiraj';
  // username:any  = new Subject<string>();
  username: any = new BehaviorSubject<string>('Dhiraj');
  videoemit = new ReplaySubject<string>(3, 5000);

  asynsub = new AsyncSubject();

  inputData: any = new BehaviorSubject('dhiraj');

  storedata: any;
  baseurl = 'https://testnodejsapis.herokuapp.com/FetchData';
  print(content: any, element: string) {
    let rel = document.createElement('li');
    rel.innerHTML = content;
    document.getElementById(element)?.appendChild(rel);
    document.getElementById(element)?.prepend(rel);
  }
  fetch(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  myAppInit() {
    return new Promise((resolve, rejects) => {
      let mydata;
      this.callApi().subscribe(
        (res: any) => {
          mydata = res;
          console.log('App Initializer middle', mydata);
          resolve('it is resolved');
        },
        (err) => {
          setTimeout(() => {
            console.log(err);
            console.log('App Initializer error', err);
            resolve('it is reject');
          }, 2000);
        }
      );
    });
  }

  callApi() {
    return this.http.get('http://127.0.0.1:2000/api/');
  }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      return fn();
    }
    return of(null);
  }
}
