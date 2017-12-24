import {Component, OnInit, OnDestroy} from '@angular/core';

import {CartItem} from '../../models/cartItem';
import {CartArrayService} from '../services/cart-array.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CartService} from '../../services';

@Component({
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItem>;
  private editedCartItem: CartItem;

  constructor(private cartArrayService: CartArrayService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }


  ngOnInit() {
    this.cartArrayService.getCartItems()
      .then(cartItems => this.cartItems = [...cartItems])
      .catch(err => console.log(err));

    // listen id from CartItemFormComponent
    this.route.paramMap
      .switchMap((params: Params) => this.cartArrayService.getCartItem(+params.get('id')))
      .subscribe(
        (cartItem: CartItem) => {
          this.editedCartItem = {...cartItem};
          console.log(`Last time you edit user ${JSON.stringify(this.editedCartItem)}`);
        },
        err => console.log(err)
      );
  }


  ngOnDestroy() {
  }

  isEdited(user: CartItem) {
    if (this.editedCartItem) {
      return user.id === this.editedCartItem.id;
    }
    return false;
  }

  placeOrder(): void {
    // todo free up the cart

    // save order

  }
}
