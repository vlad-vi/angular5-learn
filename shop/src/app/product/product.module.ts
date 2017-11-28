import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './components/product-component/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductsService} from './services/products.service';
import {OrderByPipe} from "../pipes/orderby.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    OrderByPipe
  ],
  exports: [
    ProductListComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductModule { }
