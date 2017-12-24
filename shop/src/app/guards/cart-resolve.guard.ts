import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {CartItem} from '../models/cartItem';
import {CartArrayService} from '../users/services/cart-array.service';

@Injectable()
export class CartResolveGuard implements Resolve<CartItem> {

  constructor(private cartArrayService: CartArrayService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<CartItem> | null {
    console.log('CartResolve Guard is called');
    const id = +route.paramMap.get('id');

    return this.cartArrayService.getCartItem(id).then(cartItem => {
      if (cartItem) {
        return Promise.resolve(cartItem);
      }

      // id not found
      this.router.navigate(['/cartItems']);
      return null;
    });
  }
}
