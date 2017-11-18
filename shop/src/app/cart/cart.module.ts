import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from './services/cart.service';
import {CartListComponent} from './components/cart-list/cart-list.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [CartService]
})
export class CartModule { }
