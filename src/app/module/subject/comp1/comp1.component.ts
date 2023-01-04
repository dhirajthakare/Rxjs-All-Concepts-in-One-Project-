import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit,AfterViewInit {

  @ViewChild('changename')
  changename!: ElementRef;
  username!: string;
  constructor( public service : MiddlewareserviceService) { 
    this.service.username.subscribe((res:any)=>{
      this.username = res;
    })

  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    
  }

  change(name:any){
    console.log(name.value);
    this.service.username.next(name.value)
  }


}
