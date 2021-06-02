import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { from, fromEvent, pipe } from 'rxjs';
import { concatMap, debounce, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { HttpserviceService } from 'src/app/service/httpservice.service';

@Component({
  selector: 'app-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.css']
})
export class SearchExampleComponent implements OnInit ,AfterViewInit {

  constructor( private servive : HttpserviceService , private loadbar:LoadingBarService) { }

    @ViewChild('searchitem') searchitem : ElementRef;
    userdata=[];
    searchcount:number;

  ngOnInit(): void {

  }
  ngAfterViewInit(){

    const searchkeyup= fromEvent<any>(this.searchitem.nativeElement,'keyup').pipe(map(data=>data.target.value),
    debounceTime(500),
    distinctUntilChanged(),)
   
      searchkeyup.pipe(
        switchMap(data=>this.servive.getsearchdata(data))
        ).
      subscribe((res)=>{
        
        this.userdata = res;
        this.loadbar.stop();
        console.log(res);
        this.searchcount = Object.keys(res).length;
  
      })

    
  }

}
