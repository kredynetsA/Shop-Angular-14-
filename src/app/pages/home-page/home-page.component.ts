import { Component, OnInit } from '@angular/core';
import {Product} from "../../product.interface";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res
      console.log(res)
    }, (err) => {
      console.warn('Error:', err)
    })
  }
}
