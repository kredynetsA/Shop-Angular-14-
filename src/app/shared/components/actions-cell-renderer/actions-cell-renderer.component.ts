import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {Product} from "../../../product.interface";

@Component({
  selector: 'app-actions-cell-renderer',
  templateUrl: './actions-cell-renderer.component.html',
  styleUrls: ['./actions-cell-renderer.component.scss']
})
export class ActionsCellRendererComponent implements ICellRendererAngularComp {
  params: any;

  productId: number = 0;
  agInit(params: any): void{
    this.params = params
  }
  delete() {
    this.productId = this.params.data
    console.log('delete button', this.productId)
  }
  refresh() {
    return false;
  }

}
