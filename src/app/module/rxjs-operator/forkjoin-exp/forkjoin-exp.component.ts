import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of, timer } from 'rxjs';
import { MiddlewareserviceService } from 'src/app/common/service/middlewareservice.service';

@Component({
  selector: 'app-forkjoin-exp',
  templateUrl: './forkjoin-exp.component.html',
  styleUrls: ['./forkjoin-exp.component.css'],
})
export class ForkjoinExpComponent implements OnInit {
  constructor(private service: MiddlewareserviceService) {}

  ngOnInit(): void {
    this.forkjoinFirstExp();
    this.forkjoinSecondExp();
    this.forkjoinThirdExp();
  }

  forkjoinFirstExp() {
    // Use forkJoin with a dictionary of observable inputs

    let observable: Observable<any> = forkJoin({
      foo: of(1, 2, 3, 4),
      bar: Promise.resolve(8),
      baz: timer(4000),
    });
    observable.subscribe({
      next: (value) => console.log(value),
      complete: () =>
        console.log('This is how forkJoin with a dictionary ends!'),
    });
  }
  // Logs:
  // { foo: 4, bar: 8, baz: 0 } after 8 seconds
  // 'This is how it ends!' immediately after

  forkjoinSecondExp() {
    // Use forkJoin with an array of observable inputs
    let observable = forkJoin([
      of(1, 2, 3, 4),
      Promise.resolve(8),
      timer(4000),
    ]);
    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('This is how forkJoin with an array  ends!'),
    });
  }
  // Logs:
  // [4, 8, 0] after 4 seconds
  //

  forkjoinThirdExp() {
    let observable = forkJoin(
      this.service.callApi(),
      // this.service.fetch(),
      this.service.myAppInit()
    );
    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('This is how forkJoin with an api ends!'),
      error: (err) => console.log('error is', err),
    });
  }
}
