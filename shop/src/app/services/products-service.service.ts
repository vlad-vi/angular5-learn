import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductCategory} from '../models/product-category.enum';

@Injectable()
export class ProductsService {

  constructor() {
  }

  getProducts(): Product[] {
    const p1 = new Product();
    p1.name = 'Fancy product name 1';
    p1.description = 'Some long item description';
    p1.price = 133;
    p1.category = ProductCategory.figurines;
    p1.isAvailable = true;
    p1.ingredients = new Array<string>('milk', 'sugar', 'water')
    p1.equivalents = new Array<string>('equivalent1', 'equivalent2', 'equivalent3', 'equivalent4');

    const p2 = new Product();
    p2.name = 'Other product name';
    p2.description = 'Yet one more long item description';
    p2.price = 13.56;
    p2.category = ProductCategory.games;
    p2.isAvailable = false;
    p2.ingredients = new Array<string>('ingredient0', 'ingredient1', 'soy', 'water');
    p2.equivalents = new Array<string>('equivalent1', 'equivalent2', 'equivalent3', 'equivalent4');

    const products = new Array<Product>(p1,p2);

    return products;
  }
}
