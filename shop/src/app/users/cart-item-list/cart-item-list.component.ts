import {Component, OnInit, OnDestroy} from '@angular/core';

import {CartItem} from '../../models/cartItem';
import {CartArrayService} from '../services/cart-array.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PublicCartService} from '../../services';
import {OrderService} from '../../services/order.service';
import {Order, OrderItem} from '../../models/order';

@Component({
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItem>;
  private editedCartItem: CartItem;

  constructor(private cartArrayService: CartArrayService,
              private route: ActivatedRoute,
              private router: Router,
              private publicCartService: PublicCartService,
              private orderService: OrderService) {
  }


  ngOnInit() {
    this.publicCartService.getCartItems()
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
    const link = ['/order'];
    this.router.navigate(link);

    return;
  }
}
