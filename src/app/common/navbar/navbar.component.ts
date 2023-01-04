import { Component, OnInit } from '@angular/core';
import { MiddlewareserviceService } from '../service/middlewareservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exclusive:boolean = false;
  constructor( private service : MiddlewareserviceService) { }

  ngOnInit(): void {

    this.service.exclusive.subscribe((res:any)=>{
      this.exclusive=res;
    })
  }

}
