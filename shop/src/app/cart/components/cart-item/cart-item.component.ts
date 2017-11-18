import {
  Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() productQuantity: number;
  @Input() productName: string;
  @Output() onDeleteCartItem = new EventEmitter();
  @HostBinding('class.selectedCartItem') appliedStyle: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteCartItem(event: Event) {
    this.onDeleteCartItem.emit(event);
  }

  @HostListener('mouseenter') changeBackgroundOnMouseEnter() {
    this.appliedStyle = true;
  }

  @HostListener('mouseleave') changeBackBackgroundOnMouseLeave() {
    this.appliedStyle = false;
  }

  callThiMethodFromParentComponent() {
    console.log('added +1 to quantity for product: ' + this.productName);
  }
}
