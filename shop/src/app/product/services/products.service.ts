import {Injectable} from '@angular/core';
import {CookedProduct} from '../models/product.model';
import {ProductCategory} from '../models/product-category.enum';

@Injectable()
export class ProductsService {

  constructor() {
  }

  static getProducts(): CookedProduct[] {
    const p1 = new CookedProduct(
      'Fancy product name 1',
      33,
      ProductCategory.pie,
      2,
      ['milk', 'sugar'],
      ['equivalent1', 'equivalent2', 'equivalent3'],
      'Some long item description',
      new Date('2017-11-11'));

    const p2 = new CookedProduct(
      'Other product name',
      13.56,
      ProductCategory.salad,
      0,
      ['salad', 'tomatoes', 'soy', 'water'],
      ['equivalent1', 'equivalent2'],
      'Yet one more long item description',
      new Date('2017-10-01'));

    const p3 = new CookedProduct(
      'Product #01',
      113.06,
      ProductCategory.misc,
      5,
      ['console', 'power cable'],
      ['product #02'],
      'blah-blah description',
      new Date('2017-12-21'));

    return [p1, p2, p3];
  }
}
