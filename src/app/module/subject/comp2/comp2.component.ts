import { Component, OnInit } from '@angular/core';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  username!: string;
  constructor( public service:MiddlewareserviceService) {
    this.service.username.subscribe((res:any)=>{
      this.username = res;
    })
   }

  ngOnInit(): void {
  }
  change(name:any){
    console.log(name.value);
    this.service.username.next(name.value);
  }

}
