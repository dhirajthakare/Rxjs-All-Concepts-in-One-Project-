import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOperatorComponent } from 'src/app/common/list-operator/list-operator.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectComponent } from './subject.component';

const routes: Routes = [
  {path:'' , component:SubjectComponent},
  {path:'replay-subject' , component:ReplaySubjectComponent},
  {path:'async-subject' , component:AsyncSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
