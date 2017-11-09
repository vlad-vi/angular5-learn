import {Component, ViewChild} from '@angular/core';
import {CartComponent} from './cart/cart.component';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CartComponent) cart: CartComponent;

  onBuy($event: Product) {
    this.cart.addProduct($event);
  }
}
