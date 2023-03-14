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
  quantity: any;
  constructor(private carService: CartService) { }

  ngOnInit(): void {
    this.quantity = this.product.quantity
  }

  plus(productId: number) {
    this.quantity = this.quantity+1
    this.carService.updateProductQty(productId, this.quantity)
  }
  minus(productId: number) {
    if (this.quantity != 0 && this.quantity != 1) {
      this.quantity = this.quantity-1
      this.carService.updateProductQty(productId, this.quantity)
    }
  }
  deleteProduct(productId: number) {
    this.carService.deleteProduct(productId)
  }

}
