import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareserviceService  {

  constructor( private http: HttpClient) { }
  exclusive:any  = new Subject();
  usern :string ="dhiraj";
  // username:any  = new Subject<string>();
  username:any  = new BehaviorSubject<string>('Dhiraj');
  videoemit = new ReplaySubject<string>(3,5000);

  asynsub = new AsyncSubject();


  storedata : any;
  baseurl = "https://testnodejsapis.herokuapp.com/FetchData";
  print(content,element){

    let rel = document.createElement('li');
    rel.innerHTML = content;
    document.getElementById(element).appendChild(rel);
    // document.getElementById(element).prepend(rel);

    
      }
     fetch():Observable<any>{

       return this.http.get(this.baseurl);
      
     } 


}


