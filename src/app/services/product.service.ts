import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(protected http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/api/product')
  }
}
