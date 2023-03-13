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
    this.cartList.push(product);
    this.productList.next(this.cartList);
  }

}

