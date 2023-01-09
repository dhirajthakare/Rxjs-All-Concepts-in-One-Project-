import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MiddlewareserviceService } from './common/service/middlewareservice.service';

const routes: Routes = [
  {path:'' , redirectTo:'operator' ,pathMatch:'full'  },
  { path: 'operator', loadChildren: () => import('./module/rxjs-operator/rxjs-operator.module').then(m => m.RxjsOperatorModule) },
  { path: 'observable', loadChildren: () => import('./module/observable/observable.module').then(m => m.ObservableModule) }, { path: 'navbar', loadChildren: () => import('./common/navbar/navbar.module').then(m => m.NavbarModule) },
  { path: 'subject', loadChildren: () => import('./module/subject/subject.module').then(m => m.SubjectModule) },
  { path: 'forms', loadChildren: () => import('./module/forms/forms.module').then(m => m.FormssModule) },
  { path: 'pipes',data: {preload:true}, loadChildren: () => import('./module/pipes-exp/pipes-exp.module').then(m => m.PipesExpModule) },
  { path: 'looks', loadChildren: () => import('./module/look-cycle/look-cycle.module').then(m => m.LookCycleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // preloadingStrategy:PreloadAllModules // to load all module background
    preloadingStrategy:MiddlewareserviceService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
