import { Component, OnInit, Input, Output, OnChanges, DoCheck, EventEmitter } from '@angular/core'
import {
  TdDataTableService, TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent, ITdDataTableColumn
} from '@covalent/core'
import { IPageChangeEvent } from '@covalent/core'


@Component({
  selector: 'app-refrigerator-list',
  templateUrl: './refrigerator-list.component.html',
  styleUrls: ['./refrigerator-list.component.scss']
})
export class RefrigeratorListComponent implements OnInit, DoCheck {

  @Input('ingredients') ingredients: any[]
  @Output() onIngredientDeleted: EventEmitter<any> = new EventEmitter<any>()

  // Paramètres pour la dataTable

  columns: ITdDataTableColumn[] = [
    { name: 'name', label: 'Name' },
    { name: 'quantity', label: 'Quantity' },
    { name: 'unit', label: 'Unit' },
  ]

  filteredData: any[] = this.ingredients
  filteredTotal = 0

  searchTerm = ''
  fromRow = 1
  currentPage = 1
  pageSize = 5
  sortBy = ''
  selectedRows: any[] = []
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending

  lastNbOfItems = 0

  constructor(
    private _dataTableService: TdDataTableService
  ) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.lastNbOfItems !== this.ingredients.length) {
      this.filter()
      this.lastNbOfItems = this.ingredients.length
    }
  }

  deleteIngredient(ingredientId) {
    this.onIngredientDeleted.emit(ingredientId)
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
    let newData: any[] = this.ingredients
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false))
      }).map((column: ITdDataTableColumn) => {
        return column.name
      })
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns)
    this.filteredTotal = newData.length
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder)
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize)
    this.filteredData = newData
  }

}
