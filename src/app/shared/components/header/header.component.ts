import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItems: number = 0;
  subscription: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res.length;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
