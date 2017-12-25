import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Order, OrderItem} from '../../models/order';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ManageOrdersComponent implements OnInit, OnDestroy {
  private orders: Order[];
  private subscription: Subscription[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    // this.orderService.getOrders().then(orders => this.orders = orders);
    const sub = this.orderService.getOrders().subscribe(orders => this.orders = orders, error => console.log(error));

    this.subscription.push(sub);
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }


}
