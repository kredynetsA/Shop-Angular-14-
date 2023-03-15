import {Component, OnInit} from '@angular/core';
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartItems: number = 0;
  categories: any;
  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res.length;
    })
    this.productService.getAllCategories().subscribe((res) => {
      this.categories = res
    })
  }
}
