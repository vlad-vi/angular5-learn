import {Injectable, OnInit} from '@angular/core';

import {CartItem} from '../../models/cartItem';
import {PublicCartService} from '../../services';
import {Product} from '../../models/product';

@Injectable()
export class CartArrayService {

  constructor(private publicCartService: PublicCartService) {
  }

  getCartItems(): Promise<CartItem[]> {
    return this.publicCartService.getCartItems();
  }

  getCartItem(id: number | string): Promise<CartItem> {
    return this.publicCartService.getCartItems()
      .then(cartItems => cartItems.find(cartItem => cartItem.id === +id))
      .catch(() => Promise.reject('Error in getCartItem method'));
  }

  addCartItem(cartItem: CartItem): void {
    this.publicCartService.addProductToCart(new Product(cartItem.id, cartItem.name, -1, -1));
  }

  updateCartItem(cartItem: CartItem): void {
    this.publicCartService.updateCartItem(cartItem);

  }
}
