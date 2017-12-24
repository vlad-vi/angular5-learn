import { Component, OnInit, OnDestroy } from '@angular/core';

import { CartItem } from '../../models/cartItem';
import { CartArrayService } from '../services/cart-array.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  templateUrl: './cartItem-list.component.html',
  styleUrls: ['./cartItem-list.component.css']
})
export class CartItemListComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItem>;
  private editedCartItem: CartItem;

  constructor(
    private cartArrayService: CartArrayService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cartArrayService.getCartItems()
      .then(users => this.cartItems = [...users])
      .catch(err => console.log(err));

    // listen id from CartItemFormComponent
    this.route.paramMap
      .switchMap((params: Params) => this.cartArrayService.getCartItem(+params.get('id')))
      .subscribe(
        (user: CartItem) => {
          this.editedCartItem = {...user};
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

}
