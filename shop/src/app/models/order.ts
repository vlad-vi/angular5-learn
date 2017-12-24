export class Order {

  public date: string;

  constructor(public id: number,
              public items: OrderItem[]) {
    this.date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  }
}

export class OrderItem {
  constructor(public productName: string,
              public quantity: number) {

  }
}
