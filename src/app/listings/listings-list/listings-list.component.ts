import { Component, OnInit, Input, Output, OnChanges, DoCheck, EventEmitter } from '@angular/core'
import {
  TdDataTableService, TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent, ITdDataTableColumn
} from '@covalent/core'
import { IPageChangeEvent } from '@covalent/core'

@Component({
  selector: 'app-listings-list',
  templateUrl: './listings-list.component.html',
  styleUrls: ['./listings-list.component.css']
})
export class ListingsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
