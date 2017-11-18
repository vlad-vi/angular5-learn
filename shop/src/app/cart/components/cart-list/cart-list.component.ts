import {Component, EventEmitter, OnDestroy, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {CookedProduct} from '../../../product/models/product.model';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../models/cart-item.model';
import {CartItemComponent} from '../cart-item/cart-item.component';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  productsInCart: CartItem[];
  totalPrice = 0;
  @ViewChildren('myVar') myVar: QueryList<CartItemComponent>;
  private subscription: Subscription;
  @Output() onCartItemDeleted = new EventEmitter();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productsInCart = [];
    this.subscription = this.cartService.onReceive.subscribe(
      (data: CookedProduct) => {
        if (!!data) {
          const item = this.productsInCart.find((cartItem: CartItem) => cartItem.product.name === data.name);
          if (!!item) {
            item.quantity++;
          }else {
            this.productsInCart.push({product: data, quantity: 1});
          }
          this.recalcTotalPrice();
        }
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('unsubscribed from Observable');
  }

  addProduct(product: CookedProduct): void {
    this.cartService.addProductToCart(product);

    this.myVar.forEach((child, index) => {
      if (child.productName === product.name){
        child.callThiMethodFromParentComponent();
      }
    });
  }

  onBuy(): void {
    this.cartService.processPayment(this.productsInCart);
  }

  deleteCartItem(event: Event, productToDelete: string) {
    const itemToDelete = this.productsInCart.find((cartItem: CartItem) => cartItem.product.name === productToDelete);

    if (!!itemToDelete) {

      this.onCartItemDeleted.emit(productToDelete);

      if (itemToDelete.quantity > 1) {
        itemToDelete.quantity--;
      }else {
        const index = this.productsInCart.indexOf(itemToDelete);
        this.productsInCart.splice(index, 1);
      }
    }

    this.recalcTotalPrice();
  }

  private findCartItem(nameOfCartItemToFind: string): CartItem {
    return this.productsInCart.find((cartItem: CartItem) => cartItem.product.name === name);
  }

  private recalcTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice(this.productsInCart);
  }
}
