import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Listing } from '../../interfaces/listing'
import { Ingredient } from '../../interfaces/ingredient'

@Component({
  selector: 'app-listings-editor',
  templateUrl: './listings-editor.component.html',
  styleUrls: ['./listings-editor.component.scss']
})
export class ListingsEditorComponent implements OnInit {

  @Input('listing') listing: Listing
  @Input() ingredientName: string
  @Input() ingredientQuantity: number
  @Output() onIngredientAddedToListing: EventEmitter<any> = new EventEmitter<any>()

  ingredientUnit: 'mg' | 'g' | 'ml' | 'l'

  units = [
    { value: 'mg', label: 'Milligramme' },
    { value: 'g', label: 'Gramme' },
    { value: 'ml', label: 'Millilitre' },
    { value: 'l', label: 'Litre' }
  ]

  ingredient = new FormControl('', [Validators.required])
  quantity = new FormControl('', [Validators.required])

  addIngredientToList(listingId, ingredientName, ingredientQuantity, ingredientUnit) {
    const newIngredientToListing = { listingId, ingredientName, ingredientQuantity, ingredientUnit }
    this.onIngredientAddedToListing.emit(newIngredientToListing)
  }


  constructor() { }

  ngOnInit() {
    this.ingredientUnit = 'g'
  }

  public getIngredientErrorMessage() {
    return this.ingredient.hasError('required') ? 'You must enter a value' : ''
  }
  public getQuantityErrorMessage() {
    return this.quantity.hasError('required') ? 'You must enter a numeric value' : ''
  }

}
