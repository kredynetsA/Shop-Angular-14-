import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { ProductComponent } from './shared/components/product/product.component';
import {MatCardModule} from "@angular/material/card";
import {AdminModule} from "./admin/admin.module";
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { CartProductItemComponent } from './shared/components/cart-product-item/cart-product-item.component';
import {AgGridModule} from "ag-grid-angular";
import { ImgCellRendererComponent } from './shared/components/img-cell-renderer/img-cell-renderer.component';
import { DescCellRendererComponent } from './shared/components/desc-cell-renderer/desc-cell-renderer.component';
import { QtyCellRendererComponent } from './shared/components/qty-cell-renderer/qty-cell-renderer.component';
import {FormsModule} from "@angular/forms";
import { ActionsCellRendererComponent } from './shared/components/actions-cell-renderer/actions-cell-renderer.component';
import { TotalCellRendererComponent } from './shared/components/total-cell-renderer/total-cell-renderer.component';
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductComponent,
    ShoppingCartPageComponent,
    CartProductItemComponent,
    ImgCellRendererComponent,
    DescCellRendererComponent,
    QtyCellRendererComponent,
    ActionsCellRendererComponent,
    TotalCellRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AdminModule,
    AgGridModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
