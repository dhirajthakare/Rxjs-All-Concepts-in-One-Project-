import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MiddlewareserviceService } from 'src/app/service/middlewareservice.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  subscribe2User : boolean =true;
  subscribe3User : boolean = true;
  toggleintervel :boolean = false;


  user2subscription : Subscription;
  user3subscription : Subscription;
  intervalSubscription : Subscription;



  user1 = [];
  user2 = [];
  user3 = [];




  constructor( private service : MiddlewareserviceService) {
    this.service.videoemit.subscribe(res=>{
      this.user1.push(res);
    })
   }


  ngOnInit(): void {
  }

  Addvideo(content){
    console.log(content);
    this.service.videoemit.next(content);

  }

  subscripeuser2(){
    if(this.subscribe2User){
        this.user2subscription = this.service.videoemit.subscribe(res=>{
          this.user2.push(res);
        })
    }else{
      this.user2subscription.unsubscribe();
    }
    this.subscribe2User = !this.subscribe2User;

  }

  subscripeuser3(){
    if(this.subscribe3User){
        this.user3subscription = this.service.videoemit.subscribe(res=>{
          this.user3.push(res);
        })
    }else{
      this.user3subscription.unsubscribe();
    }
    this.subscribe3User = !this.subscribe3User;

  }

  intervalfortoggle(){
   
     if(!this.toggleintervel){
      const source = interval(1000);
      this.intervalSubscription = source.subscribe(res=>{
        this.service.videoemit.next("video"+res);
      })
     }else{
       this.intervalSubscription.unsubscribe();
     }
    
    this.toggleintervel = !this.toggleintervel;
    
  }

}
