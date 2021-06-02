import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { async } from 'rxjs';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FormEventComponent } from './observable/form-event/form-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { ObservableComponent } from './observable/observable.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SearchExampleComponent } from './observable/search-example/search-example.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { TakeComponent } from './observable/take/take.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { ZipComponent } from './observable/zip/zip.component';
import { PromoiceComponent } from './promoice/promoice.component';

const routes: Routes = [
  {path:'',component:PromoiceComponent},
  {path:'observable',component:ObservableComponent ,children:[
    {path:'' , component:ListComponent},
    {path:'formEvent' , component:FormEventComponent},
    {path:'interval' , component:IntervalComponent},
    {path:'to-array' , component:ToArrayComponent},
    {path:'Custom' , component:CustomComponent},
    {path:'map' , component:MapComponent},
    {path:'pluck' , component:MapComponent},
    {path:'filter' , component:FilterComponent},
    {path:'take' , component:TakeComponent},
    {path:'retry' , component:RetryComponent},
    {path:'debounce' , component:DebounceTimeComponent},
    {path:'subject' , component:SubjectComponent},
    {path:'replay-subject' , component:ReplaySubjectComponent},
    {path:'async-subject' , component:AsyncSubjectComponent},
    {path:'concat' , component:ConcatComponent},
    {path:'merge' , component:MergeComponent},
    {path:'merge-map' , component:MergeMapComponent},
    {path:'concat-map' , component:ConcatMapComponent},
    {path:'switch-map' , component:SwitchMapComponent},
    {path:'search' , component:SearchExampleComponent},
    {path:'sharereplay' , component:ShareReplayComponent},
    {path:'zip' , component:ZipComponent},



  ]},

  {path:'**', redirectTo:'/' ,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
