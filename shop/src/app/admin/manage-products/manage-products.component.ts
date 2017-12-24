import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductArrayService} from '../../products';
import {Product} from '../../models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  productList: Array<Product>;

  constructor(private prodService: ProductArrayService) { }

  ngOnInit() {
    this.prodService.getProducts()
      .then(product => this.productList = [...product])
      .catch(err => console.log(err));
  }

}
