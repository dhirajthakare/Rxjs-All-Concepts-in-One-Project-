import { Component, OnInit } from '@angular/core';
import { interval, Subscription,pipe, from, of } from 'rxjs';
import {take,toArray } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

    array  = [
      {name:"dhiraj",email:"abcd",mob:"123"},
      {name:"dhiraj",email:"abcd",mob:"123"},
      {name:"dhiraj",email:"abcd",mob:"123"},
      {name:"dhiraj",email:"abcd",mob:"123"},
      {name:"dhiraj",email:"abcd",mob:"123"},

    ]
  sourcesubscriptiondetails!: Subscription;

  ngOnInit(): void {

    const source = interval(1000);
    this.sourcesubscriptiondetails = source.pipe(take(10),toArray()) .subscribe((res)=>{
      console.log(res);

      // if(res >= 5){
      //   this.sourcesubscriptiondetails.unsubscribe();
      // }

      let obj = from(this.array).pipe(toArray()).subscribe(res=>{
        console.log(res);
      })

      let string = of('dhiraj','arjun','soneya','bhau').pipe(toArray()). subscribe((res)=>{
        console.log(res);
      })

      
    })

  }

}
