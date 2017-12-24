import { Component, Input } from '@angular/core';

import { CartItem } from '../../models/cartItem';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'cartItem',
  templateUrl: './cartItem.component.html',
  styleUrls: ['./cartItem.component.css']
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
    // const link = ['edit', this.cartItem.id];
    // this.router.navigate(link, {relativeTo: this.route});

  }
}
