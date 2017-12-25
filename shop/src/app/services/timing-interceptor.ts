import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let requestStartTime;
    const urlToFilter = 'products';

    if (req.url.endsWith(urlToFilter)) {
      requestStartTime = Date.now();
    }

    return next.handle(req)
      .map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse ) {
          if ( event.url.endsWith(urlToFilter) ) { console.log(`HTTP Request to /products took ${Date.now() - requestStartTime} ms` ); }
          return event;
        }
      });

  }
}
