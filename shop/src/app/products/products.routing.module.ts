import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductFormComponent, ProductListComponent} from '.';
import {ProductInfoComponent} from "./product-info/product-info.component";

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
    data: {
      title: 'Product Manager',
      meta: [{
        name: 'description',
        content: 'Product Manager Application'
      },
        {
          name: 'keywords',
          content: 'Angular 5, Routing'
        }]
    }

  },
  {
    path: 'edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'product/:id',
    component: ProductInfoComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
