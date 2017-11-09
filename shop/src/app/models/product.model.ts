import {ProductCategory} from './product-category.enum';

export class Product {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  ingredients: Array<string>;
  equivalents: Array<string>;
}
