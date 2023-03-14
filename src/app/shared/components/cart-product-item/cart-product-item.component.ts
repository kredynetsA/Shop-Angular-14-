import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../product.interface";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss']
})
export class CartProductItemComponent implements OnInit {
  @Input() product!: Product;
  quantity?: number;
  totalPrice?: number;
  price?: number;
  showTotal: boolean = false;
  constructor(private carService: CartService) { }

  ngOnInit(): void {
    this.quantity = this.product.quantity
    this.totalPrice = this.product.totalPrice
    this.price = this.product.price
    if (this.quantity! > 1) {
      this.showTotal = true
    }
  }

  plus(productId: number) {
    this.quantity = this.quantity!+1
    this.totalPrice = this.price!* this.quantity
    this.carService.updateProductQty(productId, this.quantity, this.totalPrice)
    if (this.quantity! > 1) {
      this.showTotal = true
    }
  }
  minus(productId: number) {
    if (this.quantity != 0 && this.quantity != 1) {
      this.totalPrice = this.totalPrice! - this.price!
      this.quantity = this.quantity!-1
      this.carService.updateProductQty(productId, this.quantity, this.totalPrice.toFixed(2))
    }
    if (this.quantity == 1) {
      this.showTotal = false
    }
  }

  deleteProduct(productId: number) {
    this.carService.deleteProduct(productId)
  }
}
