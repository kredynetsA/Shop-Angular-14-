import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../product.interface";
import {CartService} from "../../../services/cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  cart: any = [];
  constructor(private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this._snackBar.open('Added To Cart', 'Close', {
      duration: 4 * 1000
    });
  }

}
