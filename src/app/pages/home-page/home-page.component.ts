import { Component, OnInit } from '@angular/core';
import {Product} from "../../product.interface";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products: Product[] = [
    {id: 1, productLink:'https://material.angular.io/assets/img/examples/shiba2.jpg', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', name: 'Product title', desc:'The Shiba Inu is the smallest of the six original.', qty: 1, price: 35,  },
    { id: 2, productLink:'https://material.angular.io/assets/img/examples/shiba2.jpg', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', name: 'Product title', desc:'The Shiba Inu is the smallest of the six original.', qty: 1, price: 20,  },
    { id: 2, productLink:'https://material.angular.io/assets/img/examples/shiba2.jpg', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', name: 'Product title', desc:'The Shiba Inu is the smallest of the six original.', qty: 1, price: 40,  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
