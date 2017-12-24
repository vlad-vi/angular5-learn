import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductArrayService } from '../services/product-array.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productArrayService: ProductArrayService) { }

  ngOnInit() {
    console.log(this.products);
    this.productArrayService.getProducts()
      .then(prods => this.products = prods)
      .catch((err) => console.log(err));
  }

}
