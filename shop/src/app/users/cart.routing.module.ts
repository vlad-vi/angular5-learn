import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CartItemFormComponent, CartItemListComponent, CartItemsComponent} from '.';
import {CanDeactivateGuard} from '../guards/can-deactivate.guard';
import {CartResolveGuard} from '../guards/cart-resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: CartItemsComponent,
    children: [
      {
        path: 'add',
        component: CartItemFormComponent
      },
      {
        path: 'edit/:id',
        component: CartItemFormComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          cartItem: CartResolveGuard
        }

      },
      {
        path: '',
        component: CartItemListComponent
      },
    ]
  }
];

export let cartItemsRouterComponents = [CartItemsComponent, CartItemListComponent, CartItemFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    CartResolveGuard
  ]
})
export class CartItemsRoutingModule {
}
