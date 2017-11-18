import {Injectable} from '@angular/core';
import {CookedProduct} from '../models/product.model';
import {ProductCategory} from '../models/product-category.enum';

@Injectable()
export class ProductsService {

  constructor() {
  }

  static getProducts(): CookedProduct[] {
    const p1 = new CookedProduct();
    p1.name = 'Fancy product name 1';
    p1.description = 'Some long item description';
    p1.price = 33;
    p1.category = ProductCategory.pie;
    p1.itemsInStock = 2;
    p1.ingredients = ['milk', 'sugar']
    p1.equivalents = ['equivalent1', 'equivalent2', 'equivalent3'];

    const p2 = new CookedProduct();
    p2.name = 'Other product name';
    p2.description = 'Yet one more long item description';
    p2.price = 13.56;
    p2.category = ProductCategory.salad;
    p2.itemsInStock = 0;
    p2.ingredients = ['salad', 'tomatoes', 'soy', 'water'];
    p2.equivalents = ['equivalent1', 'equivalent2'];

    const p3 = new CookedProduct();
    p3.name = 'Product #01';
    p3.description = 'blah-blah description';
    p3.price = 113.06;
    p3.category = ProductCategory.consoles;
    p3.itemsInStock = 5;
    p3.ingredients = ['console', 'power cable'];
    p3.equivalents = ['product #02'];

    return [p1, p2, p3];
  }
}
