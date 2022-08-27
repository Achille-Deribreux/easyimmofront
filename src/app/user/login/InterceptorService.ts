import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: <string>sessionStorage.getItem('token')
        }
      })
    }
    req = req.clone({
        headers :
          req.headers
          .append('Accept', 'application/json')
          .append('Access-Control-Allow-Origin', '*')
          .append('Content-Type',  'application/json')
          .append('Content-Type',  'application/json')
      });

    return next.handle(req);

  }
}
