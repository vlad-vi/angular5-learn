export class Order {
  constructor(public id: number,
              public items: OrderItem[],
              public date: Date) {
  }
}

export class OrderItem {
  constructor(public productName: string,
              public quantity: number) {

  }
}
