import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../models/product';
import {PublicCartService} from '../../services';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onComplete = new EventEmitter<Product>();

  constructor(private router: Router,
              private messagesService: PublicCartService,
              ) {
  }

  addToCart() {
    this.messagesService.addProductToCart(this.product);
  }

}
