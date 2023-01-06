import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesExpRoutingModule } from './pipes-exp-routing.module';
import { PipesExpComponent } from './pipes-exp.component';
import { FactorialPipe } from './factorial.pipe';
import { TypesOfPipesPipe } from './types-of-pipes.pipe';


@NgModule({
  declarations: [
    PipesExpComponent,
    FactorialPipe,
    TypesOfPipesPipe
  ],
  imports: [
    CommonModule,
    PipesExpRoutingModule
  ]
})
export class PipesExpModule { }
