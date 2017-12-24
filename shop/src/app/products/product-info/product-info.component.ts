import {Component, OnInit} from '@angular/core';
import {ProductArrayService} from '../services/product-array.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product: Product;

  constructor(private productArrayService: ProductArrayService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product = new Product(null, '', null, null);

    this.route.paramMap
      .switchMap((params: Params) => this.productArrayService.getproduct(+params.get('id')))
      .subscribe(
        product => this.product = Object.assign({}, product),
        err => console.log(err)
      );

  }


  goBack(): void {
    this.router.navigate(['/home']);
  }
}
