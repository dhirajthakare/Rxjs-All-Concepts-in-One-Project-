import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor( private service : MiddlewareserviceService) { }

  getdata(data){
    return of(data + "  is good Technology ").pipe(delay(2000))
  }
ngOnInit(): void {

  // exp 1 mergeMap

    const data = from(['angular','Nodejs' ,'express']);

    data.pipe(mergeMap(res=>this.getdata(res))).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elmcont');
    })
      
    // this is Solution for observable in observable =>

    // data.pipe(map(res=>this.getdata(res))).subscribe(res=>res.subscribe(res=>{
    //   console.log(res);
    //   this.service.print(res,'elmcont');
    // }))

    // exp2

    data.pipe(concatMap(res=>this.getdata(res))).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elmcont1');
    })


    // exp 3 switchMap
    data.pipe(switchMap(res=>this.getdata(res))).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elmcont2');
    })

}

}
