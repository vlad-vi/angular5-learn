import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Order, OrderItem} from '../../models/order';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ManageOrdersComponent implements OnInit {
  private orders: Order[]
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().then(orders => this.orders = orders);
  }

}
