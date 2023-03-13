import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  cartItems: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res.length;
    })
  }

}
