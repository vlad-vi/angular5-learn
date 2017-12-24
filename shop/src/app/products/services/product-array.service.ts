import { Injectable } from '@angular/core';

import { Product } from '../../models/product';

const productList = [
  new Product(1, 'Banana', 1, 18, 'Regular banana'),
  new Product(2, 'Apple', 2, 12, 'Some fresh apples'),
  new Product(3, 'Carrot', 3, 8, 'Very healthy food')
];

const productListPromise = Promise.resolve(productList);

@Injectable()
export class ProductArrayService {

  getProducts(): Promise<Product[]> {
    return productListPromise;
  }

  getproduct(id: number | string): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getproduct method'));
  }

  addProduct(product: Product): void {
    productList.push(product);
  }

  updateProduct(product: Product): void {
    let i = -1;

    productList.forEach((item, index) => {
      if (item.id === product.id ) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      productList.splice(i, 1, product);
    }
  }
}
