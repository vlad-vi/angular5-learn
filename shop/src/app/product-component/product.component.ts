import {Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() onBuy: EventEmitter<Product> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
