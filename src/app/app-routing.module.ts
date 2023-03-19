import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";

const routes: Routes = [
      {path: '', redirectTo: '/' ,pathMatch: 'full'},
      {path: '', component: ProductsPageComponent},
      {path: 'product/:id', component: ProductPageComponent},
      {path: 'shopping-cart', component: ShoppingCartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
