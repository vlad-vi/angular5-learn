import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../models/product';
import {CartService, MessagesService} from '../../services';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onComplete = new EventEmitter<Product>();

  constructor(private router: Router,
              private messagesService: MessagesService,
              private cartService: CartService) {
  }

  addToCart() {
    // this.cartService.addProductToCart(this.product);
    this.messagesService.addProductToCart(this.product);
  }

}
