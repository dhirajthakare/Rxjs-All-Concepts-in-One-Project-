import { Component, ElementRef, OnInit, ViewChild ,AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit {

  constructor( private service:MiddlewareserviceService) { }

    @ViewChild('addbtn')
  addbtn!: ElementRef;
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let count = 0;
    fromEvent(this.addbtn.nativeElement,'click').subscribe((res)=>{
      // console.log(res);
     let content = 'print'+count;
      this.service. print(content,'elmcont')
      this.service.print(content,'elmcont1')

      count++;
    })
  }
//   print(content,element){

 rel = document.createElement('li');
// rel.innerHTML = content;
// document.getElementById(element).appendChild(rel);

//   }

}
