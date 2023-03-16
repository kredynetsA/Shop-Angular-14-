import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(protected http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
  getProductById(id: number) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }
  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getCategory(category: string){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
  }
}
