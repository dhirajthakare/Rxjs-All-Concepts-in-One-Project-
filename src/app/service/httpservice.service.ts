import { HttpClient } from '@angular/common';
import { Injectable } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor( private http : HttpClient ,private loadbar:LoadingBarService) { }

  getsearchdata(searchItem):Observable<any>{
    this.loadbar.start();
    return this.http.get('http://testnodejsapis.herokuapp.com/fetchData/'+searchItem);
  }

}
