import { Component, OnInit } from '@angular/core';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-look-test',
  templateUrl: './look-test.component.html',
  styleUrls: ['./look-test.component.css']
})
export class LookTestComponent implements OnInit {

  constructor(private middle:MiddlewareserviceService) { }
  inputData:any = ""

  ngOnInit(): void {
    this.middle.inputData.subscribe((res:any)=>{
      this.inputData = res;
    })    
  }

}
