import {Injectable, OnInit} from '@angular/core';

import {CartItem} from '../models/cartItem';
import {PublicCartService} from './index';
import {Product} from '../models/product';
import {Order} from '../models/order';


@Injectable()
export class OrderService {

  private orderList: Array<Order>;
  private ordersName = 'orderStorage';

  constructor() {
    this.orderList = new Array<Order>();
    this.restoreOrdersFromLocalStorage();
  }

  private restoreOrdersFromLocalStorage() {

    const dataFromStorage = localStorage.getItem(this.ordersName);
    if (dataFromStorage) {
      this.orderList = JSON.parse(dataFromStorage);
    }
  }

  placeOrder(order: Order) {
    this.orderList.push(order);

    localStorage.setItem(this.ordersName, JSON.stringify(this.orderList));
  }

  getOrders(): Promise<Order[]> {
    return Promise.resolve(this.orderList);
  }

}
