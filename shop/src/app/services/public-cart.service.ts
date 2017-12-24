import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {CartItem} from '../models/cartItem';

@Injectable()
export class PublicCartService {
  isDisplayed = false;

  private itemsInCart: CartItem[] = [];

  constructor() {
  }

  addProductToCart(productToAdd: Product) {

    if (!!productToAdd) {
      const item = this.itemsInCart.find((cartItem: CartItem) => cartItem.name === productToAdd.name);
      if (!!item) {
        item.numberInCart++;
      } else {
        this.itemsInCart.push(new CartItem(productToAdd.id, productToAdd.name, 1));
      }
    }
  }

  updateCartItem(cartItem: CartItem): void {
    let i = -1;

    this.itemsInCart.forEach((item, index) => {
      if (item.id === cartItem.id) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      this.itemsInCart.splice(i, 1, cartItem);
    }

  }

  getCartItemsCache(): CartItem[] {
    return this.itemsInCart;
  }

  getCartItems(): Promise<CartItem[]> {
    return Promise.resolve(this.itemsInCart);
  }

  removeItemFromCart(id: number): void {
    const item = this.itemsInCart.find((cartItem: CartItem) => id === cartItem.id);
    if (!!item) {
      if (item.numberInCart > 1) {
        item.numberInCart--;
      } else {
        this.itemsInCart.splice(this.itemsInCart.indexOf(item), 1);
      }
    }
  }

  resetCart(): void {
    this.itemsInCart.length = 0;
  }

}
