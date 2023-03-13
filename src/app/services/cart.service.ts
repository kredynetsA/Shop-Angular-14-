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
  constructor(protected http: HttpClient) { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: Product) {
    this.cartList.push(product)
    this.productList.next(product);
  }
  addToCart(product: Product) {

    if (!this.cartList.includes(product)) {
      this.cartList.push(product)
      this.productList.next(this.cartList);
    }
    // this.cartList.push(product);
    this.productList.next(this.cartList);

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

  checkDuplicates(product: Product) {
    this.cartList.map((p: Product, i) => {
      if (product.id === p.id) {
        this.cartList[i].quantity =+1
        console.log(this.cartList)
        this.productList.next(this.cartList);
        return
      }
    })

    // this.cartList.map((p: Product, i) => {
    //   if (product.id === p.id) {
    //     // const prodQty = (this.cartList[i].quantity ?? 0 ) +1
    //     const prodQty = this.cartList[i].quantity
    //     console.log(prodQty , 'product qty')
    //     this.productList.next(this.cartList);
    //   }
    // })
  }
  updateProductQty(productId: number, qty: number) {
    this.cartList.map((p:Product, i) => {
      if (p.id === productId) {
        this.cartList[i].quantity = qty
        this.productList.next(this.cartList)
      }
    })
  }

}

