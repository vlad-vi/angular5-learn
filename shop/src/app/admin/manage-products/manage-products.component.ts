import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductArrayService, ProductPromiseService} from '../../products';
import {Product} from '../../models/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  productList: Array<Product>;

  constructor(private prodService: ProductArrayService,
              private router: Router,
              private productPromiseService: ProductPromiseService) { }

  ngOnInit() {
    this.productPromiseService.getProducts()
      .then(product => this.productList = [...product])
      .catch(err => console.log(err));
  }

  deleteProduct(product: Product) {
    console.log('1111');
    this.productPromiseService.deleteProduct(product)
      .then(() => this.productList = this.productList.filter(t => t !== product))
      .catch(err => console.log(err));
  }

  createProduct() {
    const link = ['/add'];
    this.router.navigate(link);
  }


}
