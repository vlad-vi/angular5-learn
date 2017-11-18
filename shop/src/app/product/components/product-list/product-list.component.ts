import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {CookedProduct} from '../../models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  products: Array<CookedProduct>;
  @Output() onAddToCart: EventEmitter<CookedProduct> = new EventEmitter();

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.products = ProductsService.getProducts();
  }

  returnProduct(name: string) {
    const productReturned = this.products.find(value => value.name === name);
    productReturned.itemsInStock++;
  }
}
