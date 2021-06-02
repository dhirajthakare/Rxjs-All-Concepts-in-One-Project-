import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of, timer } from 'rxjs';
import { map, take, takeLast, takeUntil, toArray } from 'rxjs/operators';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private service : MiddlewareserviceService) { }

  ngOnInit(): void {

    const interv = interval(1000);

    interv.subscribe(res=>{

    })

    const source = of('dhiraj','arjun','soneya','bhau','bhoma','shubu');

    source.pipe(take(3)).
    subscribe(res=>{
      this.service.print(res,'elmcont');
      console.log(res);

    })

    source.pipe(takeLast(3)).
    subscribe(res=>{
      console.log(res);
      this.service.print(res,'elmcont1');

    })

    
    const condition = timer(4000);
    const condition1 = fromEvent(document,'click');
    interv.pipe(map(res=>'video'+res), takeUntil(condition1)).
    subscribe(res=>{
      this.service.print(res,'elmcont2');
      console.log(res);

    })
    
  }

}
