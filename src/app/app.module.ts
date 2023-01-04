import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NavbarModule } from './common/navbar/navbar.module';
import { ListOperatorComponent } from './common/list-operator/list-operator.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
