import {Component, Optional, ViewChild} from '@angular/core';
import {CartListComponent} from './cart/components/cart-list/cart-list.component';
import {CookedProduct} from './product/models/product.model';
import {ProductListComponent} from './product/components/product-list/product-list.component';
import {ConstantsService} from './services/constants.service';
import {ConfigOptionsService} from './services/config-options.service';
import {ConfigOptions} from './models/config-options.model';
import {LocalStorageService} from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastVisited: string;
  @ViewChild(CartListComponent) cart: CartListComponent;
  @ViewChild('productList') productList: ProductListComponent;

  constructor(@Optional() constantsService: ConstantsService,
              @Optional() configService: ConfigOptionsService,
              private localStorageService: LocalStorageService) {

    if (!!configService) {
      configService.configure(new ConfigOptions(1, 'admin', 'admin@admin.com'));
    }else {
      console.log('ConfigService not initialized');
    }

    if (!!constantsService) {
      console.log(constantsService.getConst());
    }
    this.lastVisited = this.localStorageService.getItem('lastVisited');
    localStorageService.setItem('lastVisited', new Date().toLocaleString());
  }

  onBuy(product: CookedProduct) {
    product.itemsInStock--;
    this.cart.addProduct(product);
  }

  itemRemovedFromCart(productName: string) {
    this.productList.returnProduct(productName);
  }
}
