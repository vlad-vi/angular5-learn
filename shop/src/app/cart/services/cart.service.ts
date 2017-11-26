import {Injectable} from '@angular/core';
import {CookedProduct} from '../../product/models/product.model';
import {Observable} from 'rxjs/Observable';
import {CartItem} from '../components/models/cart-item.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  private totalItemsInCartSubject = new BehaviorSubject<number>(0);
  onTotalItemsInCartChanges: Observable<number> = this.totalItemsInCartSubject.asObservable();
  // private totalItems = 0;

  private totalPriceSubject = new BehaviorSubject<number>(0);
  onTotalPriceChanges: Observable<number> = this.totalPriceSubject.asObservable();

  private itemsInCart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(null);
  cartChanges: Observable<CartItem[]> =
    this.cartSubject.asObservable();

  constructor() {
  }

  static getTotalPrice(productsToBuy: CartItem[]): number {
    let sum = 0;
    for (const item of productsToBuy) {
      sum += item.product.price * item.quantity;
    }
    return sum;
  }

  private getTotalPriceOfItemsInCart(): number {
    return CartService.getTotalPrice(this.itemsInCart);
  }

  private getTotalNumberOfItemsInCart(): number {
    let sum = 0;
    for (const item of this.itemsInCart) {
      sum += item.quantity;
    }
    return sum;
  }

  addProductToCart(productToAdd: CartItem) {
    if (!!productToAdd) {
      const item = this.itemsInCart.find((cartItem: CartItem) => cartItem.product.name === productToAdd.product.name);
      if (!!item) {
        item.quantity++;
      } else {
        this.itemsInCart.push(productToAdd);
      }
    }

    this.updateSubjects();
  }

  removeProductFromCart(productToRemove: CartItem): void {
    if (!!productToRemove) {
      const item = this.itemsInCart.find((cartItem: CartItem) => productToRemove.product.name === cartItem.product.name);
      if (!!item) {
        if (item.quantity > productToRemove.quantity) {
          item.quantity--;
        } else {
          this.itemsInCart.splice(this.itemsInCart.indexOf(item), 1);
        }
      }
      this.updateSubjects();
    }
  }

  resetCart(): void {
    this.itemsInCart = [];
    this.updateSubjects();
  }

  private updateSubjects(): void {
    this.cartSubject.next(this.itemsInCart);
    this.totalItemsInCartSubject.next(this.getTotalNumberOfItemsInCart());
    this.totalPriceSubject.next(this.getTotalPriceOfItemsInCart());
  }
}
