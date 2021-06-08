import { Injectable, Provider } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { peopleData } from 'src/assets/mock-data/people.mock';

@Injectable()
export class MockDataInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return of(new HttpResponse({
      status: 200,
      body: peopleData,
    }))
  }
}

export const mockDataInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockDataInterceptor,
  multi: true
};
