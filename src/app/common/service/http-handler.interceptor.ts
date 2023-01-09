import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {

  constructor(private loader:LoadingBarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let newrequest = request.clone({
      setHeaders:{
        myHeader:"header Added dynamically using interceptor"
      }
    })

    return next.handle(newrequest);
  }
}
