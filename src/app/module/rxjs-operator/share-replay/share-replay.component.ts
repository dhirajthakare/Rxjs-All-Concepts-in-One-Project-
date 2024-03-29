import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {

  AllStudents!: Observable<any>;
  MaleStudent!: Observable<any>;
  FemaleStudent:any;

  constructor( private service:MiddlewareserviceService) { }

  ngOnInit(): void {
    this.fetchAllData();
    
  }

  fetchAllData(){
    
    this.AllStudents = this.service.fetch().pipe(shareReplay());

    this.MaleStudent = this.AllStudents.pipe(
      map(res => res.filter((Male:any)=>{
        return Male['Gender']=='Male'
      }))
    )

    this.FemaleStudent = this.AllStudents.pipe(
      map(res => res.filter((Male:any)=>{
        return Male['Gender']=='Female'
      }))
    )
  
  }

}
