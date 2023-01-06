import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typesOfPipes',
  pure:false
})
export class TypesOfPipesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    return value.name+" =  "+value.age;
  }

}
