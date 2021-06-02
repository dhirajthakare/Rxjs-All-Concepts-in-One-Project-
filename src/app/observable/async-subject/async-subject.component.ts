import { Component, OnInit } from '@angular/core';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor( private service : MiddlewareserviceService) { }

  user1:string

  ngOnInit(): void {
    this.service.asynsub.subscribe(res=>{
      this.user1 = res as any
      console.log(this.user1);
    })
  }
  Addvideo(content){
    // console.log(content);
    // this.service.videoemit.next(content);
    this.service.asynsub.next(content);

  }
  oncomplete(){
    this.service.asynsub.complete();
  }

}
