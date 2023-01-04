import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';


@NgModule({
  declarations: [
    SubjectComponent,
    ReplaySubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
