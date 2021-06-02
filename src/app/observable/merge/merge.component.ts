import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit ,OnDestroy {

 
  constructor( private service : MiddlewareserviceService) { }
  channelSubscription : Subscription


  ngOnInit(): void {


    const techSourch = interval(1000).pipe(map(v=>'Tech channel # '+v),take(5))
    const comedySourch = interval(3000).pipe(map(v=>'Comedy channel # '+v),take(3))
    const newsSourch = interval(2000).pipe(map(v=>'News channel # '+v),take(4))
    const finalSource = merge(techSourch,comedySourch,newsSourch);

     this.channelSubscription = finalSource.subscribe((res)=>{
      this.service.print(res,'elmcont');
      console.log(res);
    })

  }
  ngOnDestroy(){
    this.channelSubscription.unsubscribe();
  }

}
