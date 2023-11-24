import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from "@angular/router";

@Injectable()
export class ErrorRequestInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status)) {
        console.warn('Hubo un error manejado por el interceptor');
        this.router.navigate(['/login']);
      }
      return throwError(() => err.error?.message);
    }));
  }
}
