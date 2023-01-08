import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookCycleComponent } from './look-cycle.component';
import { LookTestComponent } from './look-test/look-test.component';

const routes: Routes = [{ path: '', component: LookCycleComponent , children:[
  {path:'',component:LookTestComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookCycleRoutingModule { }
