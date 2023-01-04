import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscriber, Subscription, timer } from 'rxjs';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit ,OnDestroy {

  constructor(private service:MiddlewareserviceService) { }
    subscribtiondetails!: Subscription;

  ngOnInit(): void {

    // const brodcastvideo = interval(1000);
        const brodcastvideo = timer(2000,1000);

    this.subscribtiondetails = brodcastvideo.subscribe((res)=>{
      console.log(res);
      let content = 'print'+res;
    
      this.service.print(content,'elmcont');
      this.service.print(content,'elmcont1');
      this.service.print(content,'elmcont2');

      if(res>=5){
        this.subscribtiondetails.unsubscribe();
      }
    })
  }
  ngOnDestroy(){
    this.subscribtiondetails.unsubscribe();
  }

}
