import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../product.interface";


@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res
    })
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
