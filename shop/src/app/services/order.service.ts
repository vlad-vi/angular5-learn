import {Injectable} from '@angular/core';
import {Order} from '../models/order';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class OrderService {
  private ordersUrl = 'http://localhost:3000/orders';
  private orderList: Array<Order>;
  private ordersName = 'orderStorage';

  constructor(private http: HttpClient) {
    // this.orderList = new Array<Order>();
    // this.restoreOrdersFromLocalStorage();
  }

  // private restoreOrdersFromLocalStorage() {
  //
  //   const dataFromStorage = localStorage.getItem(this.ordersName);
  //   if (dataFromStorage) {
  //     this.orderList = JSON.parse(dataFromStorage);
  //   }
  // }

  placeOrder(order: Order): Observable<Order> {
    const url = this.ordersUrl,
      body = JSON.stringify(order),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    return this.http.post(url, body, options)
      .map( this.handleData )
      .catch( this.handleError );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get(this.ordersUrl)
      .map(this.handleData)
      .catch(this.handleError);
  }

  private handleData(response: HttpResponse<Order[]>) {
    const body = response;
    return body || {};

  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }


}
