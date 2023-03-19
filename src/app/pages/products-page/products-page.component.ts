import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../product.interface";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscriptions: any[] = [];
  category?: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts()
    this.setProducts()
  }

  setProducts() {
    const subscription = this.productService.category.subscribe((res) => {
      this.category = res
      if (this.category == '') {
        this.category = 'All Products'
      }
      if (this.category !== 'All Products') {
        this.getProductsByCategory(this.category)
      } else if(this.category === 'All Products') {
        this.getAllProducts()
      }
    })
    this.subscriptions.push(subscription)
  }

  getAllProducts() {
    const subscription = this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res
      this.products.forEach((p:Product) => {
        Object.assign(p, {quantity: 1, totalPrice: p.price})
      })
    })
    this.subscriptions.push(subscription)
  }

  getProductsByCategory(category: string) {
    const subscription = this.productService.getCategory(category).subscribe((res:any) => {
      this.products = res
      this.products.forEach((p:Product) => {
        Object.assign(p, {quantity: 1, totalPrice: p.price})
      })
    })
    this.subscriptions.push(subscription)
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    })
  }


}
