import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookCycleRoutingModule } from './look-cycle-routing.module';
import { LookCycleComponent } from './look-cycle.component';
import { LookTestComponent } from './look-test/look-test.component';
import { LookForChangeComponent } from './look-for-change/look-for-change.component';


@NgModule({
  declarations: [
    LookCycleComponent,
    LookTestComponent,
    LookForChangeComponent
  ],
  imports: [
    CommonModule,
    LookCycleRoutingModule
  ]
})
export class LookCycleModule { }
