import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  tokken="001mudassirfdfd";
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // request = request.clone({ headers: request.headers.set('Tokken',this.tokken) });

    return next.handle(request);
  }
}
