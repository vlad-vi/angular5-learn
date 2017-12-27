import {OrderService} from './order.service';
import { map } from 'rxjs/operators';

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
    http.get = jasmine.createSpy('get').and.returnValue(data);
    orderService = new OrderService(http);
  });

  it('should return data', () => {
    expect(orderService.getOrders()).toEqual(data);
  });
});
