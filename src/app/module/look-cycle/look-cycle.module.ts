import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookCycleRoutingModule } from './look-cycle-routing.module';
import { LookCycleComponent } from './look-cycle.component';


@NgModule({
  declarations: [
    LookCycleComponent
  ],
  imports: [
    CommonModule,
    LookCycleRoutingModule
  ]
})
export class LookCycleModule { }
