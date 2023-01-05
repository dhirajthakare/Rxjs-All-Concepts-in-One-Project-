import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { ReactiveDrivenFormComponent } from './reactive-driven-form/reactive-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', component: FormsComponent , children:[
  { path:'template' , component:TemplateDrivenFormComponent},
  { path:'reactive' , component:ReactiveDrivenFormComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
