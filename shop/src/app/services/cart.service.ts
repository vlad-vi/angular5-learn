import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Product} from '../models/product';
import {CartItem} from '../models/cartItem';

@Injectable()
export class CartService {
  private cartSource = new BehaviorSubject<Product>(null);
  currentProductToAdd = this.cartSource.asObservable();

  constructor() {
  }

  addProductToCart(product: Product) {
    // this.cartSource.next(product);
  }

  getCartItems(): CartItem[] {
    return null;
  }
}
