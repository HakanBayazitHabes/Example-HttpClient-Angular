import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError, Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CustomerrorInterceptor implements HttpInterceptor {
  constructor(private route: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status == 404) {
          console.log('Ürün bulunamadı');
        }

        return throwError(() => errorResponse.status);
      })
    );
  }
}
