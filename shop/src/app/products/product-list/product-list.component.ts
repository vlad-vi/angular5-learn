import {Component, OnInit} from '@angular/core';

import {Product} from '../../models/product';
import {ProductArrayService} from '../services/product-array.service';
import {ProductPromiseService} from '../services/product-promise.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(private productArrayService: ProductArrayService,
              private productPromiseService: ProductPromiseService) {
  }

  ngOnInit() {
    console.log(this.products);
    this.productPromiseService.getProducts()
      .then(prods => this.products = prods)
      .catch((err) => console.log(err));
  }



}
