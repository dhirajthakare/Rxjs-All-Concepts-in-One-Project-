import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsOperatorRoutingModule } from './rxjs-operator-routing.module';
import { RxjsOperatorComponent } from './rxjs-operator.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { FilterComponent } from './filter/filter.component';
import { FormEventComponent } from './form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ReplaySubjectComponent } from '../subject/replay-subject/replay-subject.component';
import { RetryComponent } from './retry/retry.component';
import { SearchExampleComponent } from './search-example/search-example.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ZipComponent } from './zip/zip.component';
import { ForkjoinExpComponent } from './forkjoin-exp/forkjoin-exp.component';


@NgModule({
  declarations: [
    RxjsOperatorComponent,
    ConcatComponent,
    ConcatMapComponent,
    DebounceTimeComponent,
    FilterComponent,
    FormEventComponent,
    IntervalComponent,
    MapComponent,
    MergeComponent,
    MergeMapComponent,
    RetryComponent,
    SearchExampleComponent,
    ShareReplayComponent,
    SwitchMapComponent,
    TakeComponent,
    ToArrayComponent,
    ZipComponent,
    ForkjoinExpComponent
  ],
  imports: [
    CommonModule,
    RxjsOperatorRoutingModule
  ]
})
export class RxjsOperatorModule { }
