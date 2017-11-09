import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() products: Product[];

  ngOnInit(): void {
    this.products = new Array();
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

}
