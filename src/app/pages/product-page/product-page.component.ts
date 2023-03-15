import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Observable, switchMap} from "rxjs";
import {Product} from "../../product.interface";
import {CartService} from "../../services/cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit, OnDestroy {
  product?: Observable<Product>;
  subscription: any;
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService,
              private _snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
   this.subscription = this.product = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getProductById(params['id'])
      })
    )
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this._snackBar.open('Added To Cart', 'Close', {
      duration: 4 * 1000
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
