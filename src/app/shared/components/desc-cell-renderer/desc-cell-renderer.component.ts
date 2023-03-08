import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-desc-cell-renderer',
  templateUrl: './desc-cell-renderer.component.html',
  styleUrls: ['./desc-cell-renderer.component.scss']
})
export class DescCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  title: string = '';
  link: string = '';
  desc: string = '';
  agInit(params: any): void{
    this.params = params
    this.title = this.params.data.name
    this.link = this.params.data.productLink
    this.desc = this.params.data.desc
  }

  refresh() {
    return false;
  }

}
