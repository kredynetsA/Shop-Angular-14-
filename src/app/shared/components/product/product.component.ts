import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  cart: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    // this.cart.push(product)
    // localStorage.setItem('cart',product);
    // console.log(product)

  }

}
