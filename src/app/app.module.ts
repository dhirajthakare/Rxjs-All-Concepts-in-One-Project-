import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NavbarModule } from './common/navbar/navbar.module';
import { ListOperatorComponent } from './common/list-operator/list-operator.component';
import { FormsModule } from '@angular/forms';
import { MiddlewareserviceService } from './common/service/middlewareservice.service';
import { HttpHandlerInterceptor } from './common/service/http-handler.interceptor';

@NgModule({
  declarations: [AppComponent, ListOperatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    NavbarModule,
    FormsModule,
  ],
  providers: [

    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpHandlerInterceptor,
      multi:true
    },
    
    {
      provide: APP_INITIALIZER,
      useFactory: (middleservice:MiddlewareserviceService) => () => middleservice.myAppInit(),
      deps:[MiddlewareserviceService],
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
