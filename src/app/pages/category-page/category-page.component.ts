import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../product.interface";
import {switchMap} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  products: Product[] = [];
  category: any;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {
     this.route.params.subscribe((res) => {
       this.category = res['id']
       if (this.category != this.products[0].category) {
         this.getProducts()
       }
     })
    this.getProducts()
  }

  getProducts() {
    this.productService.getCategory(this.category).subscribe((res:any) => {
      this.products = res
      this.products.forEach((p:Product) => {
        Object.assign(p, {quantity: 1, totalPrice: p.price})
      })
    })

  }
}
