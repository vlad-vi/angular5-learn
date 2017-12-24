import { Component, Input } from '@angular/core';

import { CartItem } from '../../models/cartItem';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  editCartItem() {
    const link = ['/cart/edit', this.cartItem.id];
    this.router.navigate(link);
    // or
    // const link = ['edit', this.cart-item.id];
    // this.router.navigate(link, {relativeTo: this.route});

  }
}
