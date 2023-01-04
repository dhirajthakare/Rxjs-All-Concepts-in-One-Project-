import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'operator' ,pathMatch:'full'  },
  { path: 'operator', loadChildren: () => import('./module/rxjs-operator/rxjs-operator.module').then(m => m.RxjsOperatorModule) },
  { path: 'observable', loadChildren: () => import('./module/observable/observable.module').then(m => m.ObservableModule) }, { path: 'navbar', loadChildren: () => import('./common/navbar/navbar.module').then(m => m.NavbarModule) },
  { path: 'subject', loadChildren: () => import('./module/subject/subject.module').then(m => m.SubjectModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
