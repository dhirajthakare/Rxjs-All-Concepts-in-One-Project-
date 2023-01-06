import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    return this.factorialFun(value);
  }

  factorialFun(value: any) {
    let fact = 1;

    for (let index = 1; index <= value; index++) {
      fact = fact * index;
    }

    return fact;
  }
}
