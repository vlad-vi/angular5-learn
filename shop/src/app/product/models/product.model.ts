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
  constructor(public name: string,
              public price: number,
              public category: ProductCategory,
              public itemsInStock: number,
              public ingredients: Array<string>,
              public equivalents: Array<string>,
              public description?: string
              ) {
  }
}
