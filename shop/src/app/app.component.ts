import {Component, ViewChild} from '@angular/core';
import {CartListComponent} from './cart/components/cart-list/cart-list.component';
import {CookedProduct} from './product/models/product.model';
import {ProductListComponent} from './product/components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CartListComponent) cart: CartListComponent;
  @ViewChild('productList') productList: ProductListComponent;

  onBuy(product: CookedProduct) {
    product.itemsInStock--;
    this.cart.addProduct(product);
  }

  itemRemovedFromCart(productName: string) {
    this.productList.returnProduct(productName);
  }
}
