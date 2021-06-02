import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, zip } from 'rxjs';
import { pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit ,AfterViewInit {

  Names = ['dhiraj','Arjun','Mayur','bhooma','teju','harshu','ravi','shelar'];
 Colors = ['violet','tomato','yellow','orange','white','green','red'];
  
 @ViewChild('names') names : ElementRef
 @ViewChild('colors') colors : ElementRef

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){

   const  nameEvent = fromEvent(this.names.nativeElement,'change').pipe(pluck('target','value'));
   const  colorEvent = fromEvent(this.colors.nativeElement,'change').pipe(pluck('target','value'));

  // nameEvent.subscribe((res)=>{
  //   console.log(res);
  // })
  // colorEvent.subscribe((res)=>{
  //   console.log(res);
  // }) 

  combineLatest(nameEvent,colorEvent).subscribe(([name,color])=>{
    console.log(name)
    console.log(color)

    this.addbtn(name,color,'elmcont1')

    
  })

  nameEvent.pipe(withLatestFrom(colorEvent)).subscribe(([name,color])=>{
    console.log(name)
    console.log(color)

    this.addbtn(name,color,'elmcont2')

    
  })


  zip(nameEvent,colorEvent).subscribe(([name,color])=>{
    console.log(name)
    console.log(color)

    this.addbtn(name,color,'elmcont3')

    
  })
  
  }


  addbtn(name1,color1,container){

      const el = document.createElement('button');
      el.innerHTML=name1;
      el.setAttribute("style","background-color: "+color1);
      document.getElementById(container).append(el);

  }

}
