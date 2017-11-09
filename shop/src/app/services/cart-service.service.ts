import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.model';
import {apiUrl} from '../globals';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) {
  }

  processPayment(productsToBuy: Product[]): void {
    console.log('request to api being performed');
    this.http.post(apiUrl + 'api/products', productsToBuy)
      .subscribe();
  }
}
