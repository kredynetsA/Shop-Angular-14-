import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../product.interface";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  cart: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    // this.cart.push(product)
    // localStorage.setItem('cart',product);
    // console.log(product)

  }

}
