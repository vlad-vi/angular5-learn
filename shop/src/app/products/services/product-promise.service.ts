import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import './../../services/rxjs-extensions';

import {Product} from './../../models/product';

@Injectable()
export class ProductPromiseService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => <Product[]>response)
      .catch(this.handleError);
  }

  createProduct(product: Product): Promise<Product> {
    console.log('craete product called');
    const url = this.productsUrl,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

    return this.http.post(url, body, options)
      .toPromise()
      .then( response => <Product>response )
      .catch( this.handleError );
  }


  getProduct(id: number): Promise<Product> {
    return this.http.get(`${this.productsUrl}/${id}`)
      .toPromise()
      .then(response => <Product>response)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    console.log('udpate product called');
    const url = `${this.productsUrl}/${product.id}`,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      };

    return this.http.put(url, body, options)
      .toPromise()
      .then(response => <Product>response)
      .catch(this.handleError);
  }

  deleteProduct(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;

    return this.http.delete(url)
      .toPromise()
      .then( response => <Product>response)
      .catch( this.handleError );
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
