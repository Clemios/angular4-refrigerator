import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core'
import {
  TdDataTableService, TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent, ITdDataTableColumn
} from '@covalent/core'
import { IPageChangeEvent } from '@covalent/core'

@Component({
  selector: 'app-log-displayer',
  templateUrl: './log-displayer.component.html',
  styleUrls: ['./log-displayer.component.scss']
})
export class LogDisplayerComponent implements OnChanges, DoCheck {

  @Input('logMessages') logMessages: any[]

  /// DATA TABLE
  columns: ITdDataTableColumn[] = [
    { name: 'message', label: 'Message', filter: true, sortable: false, width: 300 },
    { name: 'level', label: 'Severity', filter: false, sortable: true },
  ]

  filteredData: any[] = this.logMessages
  filteredTotal: number = this.logMessages.length

  searchTerm = ''
  fromRow = 1
  currentPage = 1
  pageSize = 10
  sortBy = ''
  selectedRows: any[] = []
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending

  lastNbOfItems = 0

  /// END DATA TABLE

  constructor(private _dataTableService: TdDataTableService) { }

  // ngOnInit() {
  //   console.log(this.logMessages)
  //   this.filter()
  // }

  ngDoCheck() {
    if (this.lastNbOfItems !== this.logMessages.length) {
      this.filter()
      this.lastNbOfItems = this.logMessages.length
    }
  }

  ngOnChanges() {
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name
    this.sortOrder = sortEvent.order
    this.filter()
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm
    this.filter()
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow
    this.currentPage = pagingEvent.page
    this.pageSize = pagingEvent.pageSize
    this.filter()
  }

  showAlert(event: any): void {
    const row: any = event.row
    // .. do something with event.row
  }

  filter(): void {
    console.log('FILTER')
    let newData: any[] = this.logMessages
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false))
      }).map((column: ITdDataTableColumn) => {
        return column.name
      })
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns)
    // this.filteredTotal = newData.length
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder)
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize)
    this.filteredData = newData
  }

}
