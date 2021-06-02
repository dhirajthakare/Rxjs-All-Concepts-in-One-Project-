import { Component, OnInit } from '@angular/core';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  username :string;
  constructor( public service:MiddlewareserviceService) {
    this.service.username.subscribe((res)=>{
      this.username = res;
    })
   }

  ngOnInit(): void {
  }
  change(name){
    console.log(name.value);
    this.service.username.next(name.value);
  }

}
