import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Listing } from '../../interfaces/listing'



@Component({
  selector: 'app-listings-generator',
  templateUrl: './listings-generator.component.html',
  styleUrls: ['./listings-generator.component.css']
})
export class ListingsGeneratorComponent implements OnInit {

  @Input('listings') listings: Listing[]
  @Output() onListingAdded: EventEmitter<any> = new EventEmitter<any>()
  @Output() onGetMainListing: EventEmitter<any> = new EventEmitter<any>()
  @Output() onGetListing: EventEmitter<any> = new EventEmitter<any>()

  listingName: string
  name = new FormControl('', [Validators.required])

  addListing(listingName) {
    this.onListingAdded.emit(listingName)
  }

  getListing(listingId) {
    this.onGetListing.emit(listingId)
  }

  getMainListing(listingName) {
    this.onGetMainListing.emit()
  }

  constructor() { }

  ngOnInit() {
  }

  public getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : ''
  }

}
