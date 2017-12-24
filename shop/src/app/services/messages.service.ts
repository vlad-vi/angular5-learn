import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {CartItem} from '../models/cartItem';

@Injectable()
export class MessagesService {
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


  getCartItems(): CartItem[] {
    return this.itemsInCart;
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

  // resetCart(items?: CartItem[]): void {
  //
  //   if (!!items) {
  //     this.itemsInCart = items;
  //     for (const o of items){
  //       console.log('item: ' + o.name);
  //     }
  //   }else{
  //     this.itemsInCart.length = 0;
  //
  //   }
  // }

}
