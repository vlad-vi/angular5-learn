import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {Product} from '../../models/product';
import {ProductArrayService} from '../services/product-array.service';
import {ProductPromiseService} from '../services/product-promise.service';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  product: Product;

  constructor(private productArrayService: ProductArrayService,
              private productPromiseService: ProductPromiseService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product = new Product(null, '', null, null);

    this.route.paramMap
      .switchMap((params: Params) => {
        return params.get('id')
          ? this.productPromiseService.getProduct(+params.get('id'))
          : Promise.resolve(null);
      })
      .subscribe(
        product => this.product = Object.assign({}, product),
        err => console.log(err)
      );

  }

  ngOnDestroy(): void {
  }

  saveProduct() {
    const product = {...this.product};
    const method = this.product.id ? 'updateProduct' : 'createProduct';
    this.productPromiseService[method](product)
      .then(() => this.goBack());

  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
