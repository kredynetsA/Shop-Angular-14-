import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CartService} from "./services/cart.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
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
