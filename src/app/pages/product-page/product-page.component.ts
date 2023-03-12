import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Observable, switchMap} from "rxjs";
import {Product} from "../../product.interface";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit {
  product?: Observable<Product>;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.product = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getProductById(params['id'])
      })
    )
  }
}
