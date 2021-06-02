import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {

  @ViewChild('searchinput1') searchinput1:ElementRef;
  @ViewChild('searchinput2') searchinput2:ElementRef;
  msg1 = null;
  msg2 = null;



  constructor( private loadingbar:LoadingBarService) { }

  ngOnInit(): void {
  }


ngAfterViewInit(){


    // ex 1
  const searchevent = fromEvent<any>(this.searchinput1.nativeElement,'keyup')

  searchevent.pipe(map(res=>res.target.value),debounceTime(500)).subscribe((res)=>{
    this.msg1=res;
    console.log(res);
    this.loadingbar.start(1);
    setTimeout(() => {
      this.msg1=null;
      this.loadingbar.stop();

    }, 2000);
  })

     // ex 2
     const searchevent1 = fromEvent<any>(this.searchinput2.nativeElement,'keyup')

     searchevent1.pipe(map(res=>res.target.value),debounceTime(500),distinctUntilChanged()).subscribe((res)=>{
       console.log(res);
       this.msg2 = res;
       this.loadingbar.start(1);
       setTimeout(() => {
         this.msg1=null;
         this.loadingbar.stop();
   
       }, 2000);
     })

}

}
