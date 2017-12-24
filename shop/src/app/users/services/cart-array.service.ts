import {Injectable, OnInit} from '@angular/core';

import {CartItem} from '../../models/cartItem';
import {CartService, MessagesService} from "../../services";

const cartItemList = [
  new CartItem(1, 'item1', 33)
];

const cartItemListPromise = Promise.resolve(cartItemList);

@Injectable()
export class CartArrayService {

  constructor(private cartService: CartService,
              private messageService: MessagesService) {
  }

  getCartItems(): Promise<CartItem[]> {
    return cartItemListPromise;
  }

  getCartItem(id: number | string): Promise<CartItem> {
    return this.getCartItems()
      .then(cartItems => cartItems.find(cartItem => cartItem.id === +id))
      .catch(() => Promise.reject('Error in getCartItem method'));
  }

  addCartItem(cartItem: CartItem): void {
    cartItemList.push(cartItem);

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
