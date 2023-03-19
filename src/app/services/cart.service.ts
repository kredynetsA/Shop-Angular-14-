import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Product[] = [];
  productList = new BehaviorSubject<any>([]);
  productQty: any = 1;
  totalPrice: any;
  constructor(protected http: HttpClient) { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: Product) {
    this.cartList.push(product)
    this.productList.next(product);
  }
  addToCart(product: Product) {
    console.log(product)
    if (!this.cartList.includes(product)) {
      product.quantity = 1
      product.totalPrice = product.price
      this.cartList.push(product)
      this.productList.next(this.cartList);
    } else {
      this.productQty = product?.quantity
      this.productQty++
      this.totalPrice = product.price * this.productQty
      this.updateProductQty(product.id, this.productQty, this.totalPrice)
    }
  }
  deleteProduct(productId: number) {
    this.cartList.map((p: Product, i) => {
      if (productId === p.id) {
        this.cartList.splice(i, 1)
      }
    })
    this.productList.next(this.cartList)
  }
  clearCart() {
    this.cartList = [];
    this.productList.next(this.cartList)
  }
  updateProductQty(productId: number, qty: number, totalPrice: any) {
    this.cartList.map((p:Product, i) => {
      if (p.id === productId) {
        this.cartList[i].quantity = qty
        this.cartList[i].totalPrice = totalPrice
        this.productList.next(this.cartList)
      }
    })
  }
  getTotalPrice() {
    let totalPrice = 0
    this.cartList.map((p:Product) => {
      totalPrice += p.totalPrice
    })
    return totalPrice.toFixed(2)
  }
}

