import {Injectable, OnInit} from '@angular/core';

import {CartItem} from '../../models/cartItem';
import {CartService, MessagesService} from "../../services";
import {Product} from "../../models/product";

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
    return this.messageService.getCartItems();
    // return cartItemListPromise;
  }

  getCartItem(id: number | string): Promise<CartItem> {
    return this.messageService.getCartItems()
      .then(cartItems => cartItems.find(cartItem => cartItem.id === +id))
      .catch(() => Promise.reject('Error in getCartItem method'));
    // return this.getCartItems()
    //   .then(cartItems => cartItems.find(cartItem => cartItem.id === +id))
    //   .catch(() => Promise.reject('Error in getCartItem method'));
  }

  addCartItem(cartItem: CartItem): void {
    // cartItemList.push(cartItem);
    this.messageService.addProductToCart(new Product(cartItem.id, cartItem.name, -1, -1));
  }

  updateCartItem(cartItem: CartItem): void {
    this.messageService.updateCartItem(cartItem);

  }
}
