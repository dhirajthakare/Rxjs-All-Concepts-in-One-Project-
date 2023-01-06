import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exp',
  templateUrl: './pipes-exp.component.html',
  styleUrls: ['./pipes-exp.component.css']
})
export class PipesExpComponent implements OnInit {

  constructor() { }

  NumberOf:number = 6
  user:any = {name:"dhiraj",age:22}

  ngOnInit(): void {
  }

  changenumber(value:number){
    this.NumberOf = value;
  }

  changeUser(){
    this.user.name = 'shubham';
  }

}
