import { Component, OnInit,OnDestroy } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,OnDestroy {

  constructor( private service : MiddlewareserviceService) { }
  ngOnDestroy() {
    this.broadcastvideo1.unsubscribe();
    this.broadcastvideo.unsubscribe();
    this.broadcastvideo2.unsubscribe();

    
  }
   broadcastvideo : Subscription;
   broadcastvideo1 : Subscription;
   broadcastvideo2 : Subscription;


   array  = from([
    {
      name:"dhiraj",
      email:"abcd",
      mob:"123",
      address:{
        city:'nashik',
        state:'maharashtra',
        country:'india'
      }
  },
  {
    name:"dhiraj1",
    email:"abcd1",
    mob:"1231",
    address:{
      city:'pune',
      state:'maharashtra',
      country:'india'
    }
},
{
  name:"dhiraj2",
  email:"abcd2",
  mob:"1232",
  address:{
    city:'nashik',
    state:'maharashtra',
    country:'india'
  }
},
{
  name:"dhiraj3",
  email:"abcd3",
  mob:"1233",
  address:{
    city:'delhi',
    state:'maharashtra',
    country:'india'
  }
},
{
  name:"dhiraj4",
  email:"abcd4",
  mob:"1234",
  address:{
    city:'jaypur',
    state:'maharashtra',
    country:'india'
  }
},

  ])


  ngOnInit(): void {

     const video = interval(1000);

    //  ex 1
     this.broadcastvideo = video.pipe(map(data=>'video'+data)).subscribe((res)=>{
      this.service.print(res,'elmcont');
       console.log(res);
setTimeout(() => {
  this.broadcastvideo.unsubscribe();
}, 5000);       
     })
     


    //  ex 2

    this.broadcastvideo1 = video.pipe(map(data=>data * 3)).subscribe((res)=>{
      this.service.print(res,'elmcont1');
      //  console.log(res);
setTimeout(() => {
  this.broadcastvideo1.unsubscribe();
}, 5000);       
     })

    //  ex 3

    this.broadcastvideo2 = this.array.pipe(map(data=>data.name)).subscribe((res)=>{
      this.service.print(res,'elmcont2');
       console.log(res);
setTimeout(() => {
  this.broadcastvideo2.unsubscribe();
}, 5000);       
     })


      //  ex 4 Pluck

    this.broadcastvideo2 = this.array.pipe(pluck('address','city')).subscribe((res)=>{
      this.service.print(res,'elmcont3');
       console.log(res);
setTimeout(() => {
  this.broadcastvideo2.unsubscribe();
}, 5000);       
     })

  }

  

  
// ngOnDestroy(){

// }
 

}
