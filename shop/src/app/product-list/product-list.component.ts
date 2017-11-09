import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProductsService} from '../services/products-service.service';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;
  @Output() onBuy: EventEmitter<Product> = new EventEmitter();

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
