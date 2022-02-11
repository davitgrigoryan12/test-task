import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData: any

  constructor(private global: GlobalService) {
    this.getProducts()
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.global.getTableData().subscribe(data => {
      this.tableData = data
    })
  }

  deleteProduct(id: number) {
    this.tableData.filter((product: any) => {
      if (product.id === id) {
        this.global.delete(id).subscribe(() => {
          this.getProducts()
        })
      }
    })
  }

}