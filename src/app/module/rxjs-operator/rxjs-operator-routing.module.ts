import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOperatorComponent } from 'src/app/common/list-operator/list-operator.component';
import { SubjectComponent } from '../subject/subject.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatComponent } from './concat/concat.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { FilterComponent } from './filter/filter.component';
import { ForkjoinExpComponent } from './forkjoin-exp/forkjoin-exp.component';
import { FormEventComponent } from './form-event/form-event.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeComponent } from './merge/merge.component';
import { RetryComponent } from './retry/retry.component';
import { SearchExampleComponent } from './search-example/search-example.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ZipComponent } from './zip/zip.component';

const routes: Routes = [
  { path: '', component: ListOperatorComponent },
  {path:'formEvent' , component:FormEventComponent},
    {path:'interval' , component:IntervalComponent},
    {path:'to-array' , component:ToArrayComponent},
    {path:'map' , component:MapComponent},
    {path:'pluck' , component:MapComponent},
    {path:'filter' , component:FilterComponent},
    {path:'take' , component:TakeComponent},
    {path:'retry' , component:RetryComponent},
    {path:'debounce' , component:DebounceTimeComponent},
    {path:'concat' , component:ConcatComponent},
    {path:'merge' , component:MergeComponent},
    {path:'merge-map' , component:MergeMapComponent},
    {path:'concat-map' , component:ConcatMapComponent},
    {path:'switch-map' , component:SwitchMapComponent},
    {path:'search' , component:SearchExampleComponent},
    {path:'sharereplay' , component:ShareReplayComponent},
    {path:'zip' , component:ZipComponent},
    {path:'forkjoin' , component:ForkjoinExpComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOperatorRoutingModule { }
