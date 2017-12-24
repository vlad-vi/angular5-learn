import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PublicCartService} from './../../services';

@Component({
  selector: 'public-cart',
  templateUrl: './public-cart.component.html',
  styleUrls: ['./public-cart.component.css']
})
export class PublicCartComponent implements OnInit {

  constructor(public publicCartService: PublicCartService,
              private router: Router) {
  }

  ngOnInit() {
  }

  close() {
    this.router.navigate([{outlets: {popup: null}}]);
    this.publicCartService.isDisplayed = false;
  }

  deleteCartItem(id: number): void {
    this.publicCartService.removeItemFromCart(id);
  }
}
