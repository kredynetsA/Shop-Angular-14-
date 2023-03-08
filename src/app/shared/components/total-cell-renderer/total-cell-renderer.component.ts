import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-total-cell-renderer',
  templateUrl: './total-cell-renderer.component.html',
  styleUrls: ['./total-cell-renderer.component.scss']
})
export class TotalCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  agInit(params: any): void{
    // console.log(params.data, params)
  }

  refresh() {
    return false;
  }

}
