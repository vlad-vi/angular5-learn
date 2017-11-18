import {ProductCategory} from './product-category.enum';


export interface IProduct {
  name: string;
  description?: string;
  price: number;
  category?: ProductCategory;
  itemsInStock: number;
}

export interface ICookable {
  ingredients: Array<string>;
  equivalents: Array<string>;
}

export class CookedProduct implements IProduct, ICookable {
  name: string;
  description?: string;
  price: number;
  category: ProductCategory;
  itemsInStock: number;
  ingredients: Array<string>;
  equivalents: Array<string>;
}
