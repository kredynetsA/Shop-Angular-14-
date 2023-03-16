import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../product.interface";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res
      this.products.forEach((p:Product) => {
        Object.assign(p, {quantity: 1, totalPrice: p.price})
      })
    }, (err) => {
      console.warn('Error:', err)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
