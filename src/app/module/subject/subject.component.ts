import { Component, OnInit } from '@angular/core';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  username!: string;
  constructor( public service : MiddlewareserviceService) {

    this.service.username.subscribe((res:any)=>{
      this.username = res;
    })
   }

  ngOnInit(): void {
    this.service.exclusive.next(true);
  }
  ngOnDestroy(){
    this.service.exclusive.next(false);
  }

}
