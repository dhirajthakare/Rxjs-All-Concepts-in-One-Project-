import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(public service:MiddlewareserviceService , private loadingbar: LoadingBarService) { }

  status = false;
  Statusmsg = "No Data ";
  ngOnInit(): void {
  
  }

 show(){
   this.loadingbar.start();
  this.status = true;
  this.Statusmsg = "Fetching Data ...";
  this.service.fetch().pipe(
    // retry(4)
    retryWhen((err)=>err.pipe(
      delay(3000),
      scan((retryCount) =>{

        if(retryCount>4){
          throw err;
        }else{
          retryCount++;
          this.Statusmsg = "Retrying Attempt  "+retryCount;
          console.log(retryCount);
          return retryCount;
        }

      },0)
    ))
  ).
  subscribe((res)=>{
  this.service.storedata = res;
  this.status = false;
  this.Statusmsg="Data Fetched";
  this.loadingbar.stop();
},
(err)=>{
  this.status = false;
  this.Statusmsg="Somthing wrong ";
})
    }
}
