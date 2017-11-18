import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './components/product-component/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductsService} from './services/products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductModule { }
