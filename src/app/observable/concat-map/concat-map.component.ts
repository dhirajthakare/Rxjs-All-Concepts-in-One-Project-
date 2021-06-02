import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor( private service : MiddlewareserviceService) { }

  getdata(data){
    return of(data + "  is good Technology ").pipe(delay(2000))
  }
ngOnInit(): void {

  // exp 1

    const data = from(['angular','Nodejs' ,'express']);

    data.pipe(map(res=>this.getdata(res))).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elmcont');
    })
      
    // this is Solution for observable in observable =>

    // data.pipe(map(res=>this.getdata(res))).subscribe(res=>res.subscribe(res=>{
    //   console.log(res);
    //   this.service.print(res,'elmcont');
    // }))

    // exp2

    data.pipe(map(res=>this.getdata(res)),concatAll()).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elmcont1');
    })


    // exp 3 ConcatMAp
    data.pipe(concatMap(res=>this.getdata(res))).subscribe(res=>{
      console.log(res);
      this.service.print(res,'elmcont2');
    })

}

}
