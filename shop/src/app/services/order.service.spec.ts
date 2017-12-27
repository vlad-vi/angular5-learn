import {OrderService} from './order.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import 'rxjs/add/observable/from';

describe('OngoingModule:: OrderService', () => {
  let orderService;
  let http;
  let data;

  beforeEach(() => {
    data = [
      {id: 1, name: '1'},
      {id: 2, name: '2'},
    ];
    http = jasmine.createSpyObj('httpClient', ['get']);
    http.get = jasmine.createSpy('get').and.returnValue(Observable.of(data));
    // http.get.and.returnValue(Observable.of(data));

    orderService = new OrderService(http);
  });

  it('should return data', () => {

    orderService.getOrders().subscribe(resp => {
      expect(resp).toEqual(data);
    });
  });
});
