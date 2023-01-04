import { Component, OnInit ,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';


@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor( private service :MiddlewareserviceService) { }

  @ViewChild('addbtn')
  addbtn!: ElementRef;
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    var count = 0;
    const createobs1 =Observable.create((observes: { next: (arg0: string) => void; })=>{
      observes.next('hello dhiraj this is custom observable'+count)
      count++;
      // res.complete();
      // res.error("limite exist");
      // res.next('hello dhiraj this is custom observable2')

      
    })
    // createobs1.subscribe(res=>{
    //   this.service.print(res,'elmcont')
    //   console.log(res);
    // })
fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{
  createobs1.subscribe((res: any)=>{
    this.service.print(res,'elmcont')
  })
})

  }


}
