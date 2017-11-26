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

  productsInCart: CartItem[] = [];
  totalPrice = 0;
  totalItemsInCart = 0;
  @ViewChildren('myVar') myVar: QueryList<CartItemComponent>;
  private subscription: Subscription;
  private totalItemsInCartSubscription: Subscription;
  private totalPriceSubscription: Subscription;

  @Output() onCartItemDeleted = new EventEmitter();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.subscribeToCartChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.totalItemsInCartSubscription.unsubscribe();
    this.totalPriceSubscription.unsubscribe();
  }

  addProduct(product: CookedProduct): void {
    const itemToAdd = new CartItem();
    itemToAdd.quantity = 1;
    itemToAdd.product = product;

    this.cartService.addProductToCart(itemToAdd);

    this.myVar.forEach((child, index) => {
      if (child.productName === product.name) {
        child.callThiMethodFromParentComponent();
      }
    });
  }

  onBuy(): void {
  }

  deleteCartItem(event: Event, productToDelete: string) {
    const itemToDelete = this.productsInCart.find((cartItem: CartItem) => cartItem.product.name === productToDelete);

    if (!!itemToDelete) {
      this.onCartItemDeleted.emit(productToDelete);
      const deleteOneItem = new CartItem();
      deleteOneItem.product = itemToDelete.product;
      deleteOneItem.quantity = 1;
      this.cartService.removeProductFromCart(deleteOneItem);
    }
  }

  onResetCart() {
    for (const productToDelete of this.productsInCart){
      this.onCartItemDeleted.emit(productToDelete.product.name);
    }

    this.cartService.resetCart();
  }

  private subscribeToCartChanges(): void {
    this.subscribeToCartItemsChanges();
    this.subscribeToNumberOfItemsInCartChanges();
    this.subscribeToTotalPriceChanges();
  }

  private subscribeToTotalPriceChanges() {
    this.totalPriceSubscription = this.cartService.onTotalPriceChanges.subscribe(
      (total: number) => this.totalPrice = total,
      (error) => console.log(error)
    );
  }

  private subscribeToNumberOfItemsInCartChanges() {
    this.totalItemsInCartSubscription = this.cartService.onTotalItemsInCartChanges.subscribe(
      (num: number) => this.totalItemsInCart = num,
      (error) => console.log(error)
    );
  }

  private subscribeToCartItemsChanges() {
    this.subscription = this.cartService.cartChanges.subscribe(
      (data: CartItem[]) => this.productsInCart = data,
      (error) => console.log(error)
    );
  }
}
