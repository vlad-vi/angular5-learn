import {Injectable} from '@angular/core';

import {CartItem} from '../../models/cartItem';

const cartItemList = [
  new CartItem(1, 'item1', 33)
];

const cartItemListPromise = Promise.resolve(cartItemList);

@Injectable()
export class CartArrayService {
  getCartItems(): Promise<CartItem[]> {
    return cartItemListPromise;
  }

  getCartItem(id: number | string): Promise<CartItem> {
    return this.getCartItems()
      .then(cartItems => cartItems.find(cartItem => cartItem.id === +id))
      .catch(() => Promise.reject('Error in getCartItem method'));
  }

  addCartItem(user: CartItem): void {
    cartItemList.push(user);
  }

  updateCartItem(cartItem: CartItem): void {
    let i = -1;

    cartItemList.forEach((item, index) => {
      if (item.id === cartItem.id) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      cartItemList.splice(i, 1, cartItem);
    }
  }
}
