import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor( private service : MiddlewareserviceService) { }

    getdata(data:any){
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

      data.pipe(map(res=>this.getdata(res)),mergeAll()).subscribe(res=>{
        console.log(res);
        this.service.print(res,'elmcont1');
      })
      data.pipe(mergeMap(res=>this.getdata(res))).subscribe(res=>{
        console.log(res);
        this.service.print(res,'elmcont2');
      })

  }

}
