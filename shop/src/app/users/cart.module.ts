import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CartItemComponent, CartArrayService} from '.';
import {CartItemsRoutingModule, cartItemsRouterComponents} from './cart.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartItemsRoutingModule
  ],
  declarations: [
    cartItemsRouterComponents,
    CartItemComponent
  ],
  providers: [
    CartArrayService]
})
export class CartModule {
}
