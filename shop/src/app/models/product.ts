export class Product {
  constructor(public id: number,
              public name: string,
              public itemsInStock: number,
              public price: number,
              public description?: string) {
    this.description = description || 'No description';
  }
}
