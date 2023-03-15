import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  categories: any;
  subscription: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.subscription = this.productService.getAllCategories().subscribe((res) => {
      this.categories = res
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
