import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";
import {CategoryPageComponent} from "./pages/category-page/category-page.component";

const routes: Routes = [
      {path: '', redirectTo: '/' ,pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'product/:id', component: ProductPageComponent},
      // {path: 'category/:id', component: CategoryPageComponent},
      {path: 'shopping-cart', component: ShoppingCartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
