import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onComplete = new EventEmitter<Product>();

  constructor(private router: Router) {
  }

  completeProduct(): void {
    this.onComplete.emit(this.product);
  }

  editProduct() {
    const link = ['/edit', this.product.id];
    this.router.navigate(link);
  }

  // openProduct() {
  //   const link = ['/product', this.product.id];
  //   this.router.navigate(link);
  // }
}
