import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  
  array  = from([
    {
      name:"dhiraj",
      email:"abcd",
      gender:'Male',
      color:"red",
      address:{
        city:'nashik',
        state:'maharashtra',
        country:'india'
      }
  },
  {
    name:"sonu",
    email:"abcd1",
    color:"black",
    gender:'Male',
    address:{
      city:'pune',
      state:'maharashtra',
      country:'india'
    }
},
{
  name:"salman",
  email:"abcd2",
  color:"white",
  gender:'Female',
  address:{
    city:'nashik',
    state:'maharashtra',
    country:'india'
  }
},
{
  name:"mayur",
  email:"abcd3",
  color:"blue",
  gender:'Male',
  address:{
    city:'delhi',
    state:'maharashtra',
    country:'india'
  }
},
{
  name:"thakare3",
  email:"abcd4",
  color:"orange",
  gender:'Female',
  address:{
    city:'jaypur',
    state:'maharashtra',
    country:'india'
  }
},

  ])
  data:any;
  data1:any;
  colours = '';
  ngOnInit(): void {

    this.array.pipe(filter(member=>member.name.length > 5) ,toArray()). subscribe(res=>{
      // console.log(res);
      this.data = res;

    })
      this.array.pipe( tap(res=>{
        this.colours=res.color
      }), filter(member=>member.gender=='Male'), toArray()). subscribe(res=>{
        // console.log(res);
        this.data1 = res;

    })

    
  }
}
