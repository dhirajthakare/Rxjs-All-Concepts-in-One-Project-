import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookCycleComponent } from './look-cycle.component';

const routes: Routes = [{ path: '', component: LookCycleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookCycleRoutingModule { }
