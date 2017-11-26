import {Injectable} from '@angular/core';
import {CookedProduct} from '../../product/models/product.model';
import {Observable} from 'rxjs/Observable';
import {CartItem} from '../components/models/cart-item.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  private getSubject = new BehaviorSubject<CookedProduct>(null);
  onReceive: Observable<CookedProduct> =
    this.getSubject.asObservable();

  constructor() {
  }

  static getTotalPrice(productsToBuy: CartItem[]): number {
    let sum = 0;
    for (const item of productsToBuy) {
      sum += item.product.price * item.quantity;
    }
    return sum;
  }

  processPayment(productsToBuy: CartItem[]): void {
  }

  addProductToCart(product: CookedProduct) {
    this.getSubject.next(product);
  }


}
