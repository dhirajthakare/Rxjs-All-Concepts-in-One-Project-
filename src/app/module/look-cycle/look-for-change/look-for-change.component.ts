import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-look-for-change',
  templateUrl: './look-for-change.component.html',
  styleUrls: ['./look-for-change.component.css'],
})
export class LookForChangeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor(private service:MiddlewareserviceService) {
    console.log('On constructor hook');
  }

  changesubject():void{
    this.service.inputData.next("Shubham");
  }

  @Input('inputData') inputData :any;

  ngOnChanges(changes: SimpleChanges) {
    console.log('On ngOnChanges hook');
    this.inputData = changes['inputData'];
    console.log(this.inputData);
  }
  ngOnInit(): void {
    console.log('On ngOnInit hook');
  }
  ngDoCheck(): void {
    console.log('On ngDoCheck hook');
  }
  ngAfterContentInit(): void {
    console.log('On ngAfterContentInit hook');
  }
  ngAfterContentChecked(): void {
    console.log('On ngAfterContentChecked hook');
  }
  ngAfterViewInit(): void {
    console.log('On ngAfterViewInit hook');
  }
  ngAfterViewChecked(): void {
    console.log('On ngAfterViewChecked hook');
  }
  ngOnDestroy(): void {
    console.log('On ngOnDestroy hook');
  }
 
}
