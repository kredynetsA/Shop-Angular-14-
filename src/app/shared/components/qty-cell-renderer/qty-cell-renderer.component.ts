import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-qty-cell-renderer',
  templateUrl: './qty-cell-renderer.component.html',
  styleUrls: ['./qty-cell-renderer.component.scss']
})
export class QtyCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  qty: number = 1 ;
  agInit(params: any): void{
    this.params = params
    this.qty = this.params.data.quantity
  }

  plus() {
    this.params.plus(this.params.data.id)
  }
  minus() {
    if (this.qty != 0 && this.qty != 1) {

    }
  }
  refresh(params: any) {
    // this.params.data.qty = this.qty
    // this.qty = this.params.value
    // return true;
    return false
  }

}
