import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ProductListComponent, ProductComponent, ProductFormComponent, ProductArrayService} from '.';
import {ProductsRoutingModule} from './products.routing.module';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductFormComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductArrayService
  ]
})
export class ProductsModule {
}
