import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../product.interface";


@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  cartTotalPrice: any = 0;
  subscription: any;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.subscription =this.cartService.getProducts().subscribe((res) => {
      this.products = res
      this.cartTotalPrice = this.cartService.getTotalPrice();
    })
  }

  clearCart() {
    this.cartService.clearCart();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
