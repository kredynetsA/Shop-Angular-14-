import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  cartItems: number = 0;
  subscription: any;
  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res.length;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
