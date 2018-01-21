import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core'
import {
  TdDataTableService, TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent, ITdDataTableColumn
} from '@covalent/core'
import { IPageChangeEvent } from '@covalent/core'
import { Listing } from '../../interfaces/listing'
import { Ingredient } from '../../interfaces/ingredient'


@Component({
  selector: 'app-listings-list',
  templateUrl: './listings-list.component.html',
  styleUrls: ['./listings-list.component.scss']
})
export class ListingsListComponent implements OnInit, OnChanges {

  @Output() onGetMainListing: EventEmitter<any> = new EventEmitter<any>()
  @Output() onIngredientDeletedFromListing: EventEmitter<any> = new EventEmitter<any>()

  @Input('listing') listing: Listing
  listingName: string
  ingredients: Ingredient[]
  showList: Boolean = false

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

  getMainListing(listingName) {
    this.onGetMainListing.emit()
  }

  constructor(
    private _dataTableService: TdDataTableService
  ) {
  }

  ngOnInit() {
    this.onGetMainListing.emit()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.listing.firstChange) {
      this.listingName = changes.listing.currentValue.name
      this.ingredients = JSON.parse(changes.listing.currentValue.ingredients)
      this.showList = true
      this.filter()
      this.lastNbOfItems = this.ingredients.length
    }
  }

  deleteIngredientFromList(ingredientId) {
    this.onIngredientDeletedFromListing.emit(ingredientId)
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
