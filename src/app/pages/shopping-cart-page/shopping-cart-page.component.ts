import { Component, OnInit } from '@angular/core';
import {ColDef} from "ag-grid-community";
import {ImgCellRendererComponent} from "../../shared/components/img-cell-renderer/img-cell-renderer.component";
import {DescCellRendererComponent} from "../../shared/components/desc-cell-renderer/desc-cell-renderer.component";
import {QtyCellRendererComponent} from "../../shared/components/qty-cell-renderer/qty-cell-renderer.component";
import {
  ActionsCellRendererComponent
} from "../../shared/components/actions-cell-renderer/actions-cell-renderer.component";
import {TotalCellRendererComponent} from "../../shared/components/total-cell-renderer/total-cell-renderer.component";


@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  gridApi: any;
  editType: 'fullRow' = 'fullRow';
  columnDefs: ColDef[] = [
    {
      field: 'item',
      cellRenderer: ImgCellRendererComponent,
      width: 200,
      autoHeight: true
    },
    {
      field: 'name',
      cellRenderer: DescCellRendererComponent,
    },
    {
      field: 'qty',
      cellRenderer: QtyCellRendererComponent,
      cellRendererParams: {
      plus: (productId: number) => {
        console.log(productId)

      },
    //     // minus: (res: number) => {
    //     //   console.log(res)
    //     // }
      }
    },
    {
      field: 'price',
    },
    {
      field: 'total',
      valueGetter: 'data.qty * data.price'
    },
    {
      field: 'actions',
      cellRenderer: ActionsCellRendererComponent
    }
  ];



  constructor() {}
  onGridReady(params: any) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }

  ngOnInit(): void {
  }

  rowData = [
    {id: 1, productLink:'https://material.angular.io/assets/img/examples/shiba2.jpg', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', name: 'Product title', desc:'The Shiba Inu is the smallest of the six original.', qty: '1', price: '35',  },
    { id: 2, productLink:'https://material.angular.io/assets/img/examples/shiba2.jpg', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', name: 'Product title', desc:'The Shiba Inu is the smallest of the six original.', qty: '1', price: '35',  },
  ];
}
