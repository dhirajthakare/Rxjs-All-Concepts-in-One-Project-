import { Component, OnInit } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-promoice',
  templateUrl: './promoice.component.html',
  styleUrls: ['./promoice.component.css']
})
export class PromoiceComponent implements OnInit {

  constructor() { }

  delllaptop(){
    return true;
  }
  hplaptop(){
    return false;
  }
  promoice:any;

  ngOnInit(): void {


      // this is promoise example 
    let buyer = new Promise((resolve,reject)=>{
        if(this.delllaptop()){
          resolve("Dell laptop is available")
        }else if(this.hplaptop()){
          resolve("Hp laptop is available");
        }else{
          reject("Laptop is not available");
        }
    }).then((res)=>{
      setTimeout(() => {
        console.log(res);
        this.promoice=res;

      }, 3000);
    }).catch((err)=>{
      setTimeout(() => {
        console.log(err);
        this.promoice=err;
      }, 3000);
    })

  }

}
