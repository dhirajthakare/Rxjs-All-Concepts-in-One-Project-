import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesExpComponent } from './pipes-exp.component';

const routes: Routes = [{ path: '', component: PipesExpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesExpRoutingModule { }
