import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../models/product';

@Component({
  selector: 'product-admin',
  templateUrl: './product-admin.component.html'
})
export class ProductAdminComponent {

  @Input() public product: Product;
  @Output() onComplete = new EventEmitter<Product>();

  constructor(private router: Router) {
  }

  editProduct() {
    const link = ['/edit', this.product.id];
    this.router.navigate(link);
  }

}
