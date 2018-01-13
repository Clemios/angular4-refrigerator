import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-listings-editor',
  templateUrl: './listings-editor.component.html',
  styleUrls: ['./listings-editor.component.css']
})
export class ListingsEditorComponent implements OnInit {

  @Input() ingredientName: string
  @Input() ingredientQuantity: number
  @Output() onIngredientAddedToList: EventEmitter<any> = new EventEmitter<any>()

  ingredientUnit: 'mg' | 'g' | 'ml' | 'l'

  units = [
    { value: 'mg', label: 'Milligramme' },
    { value: 'g', label: 'Gramme' },
    { value: 'ml', label: 'Millilitre' },
    { value: 'l', label: 'Litre' }
  ]

  ingredient = new FormControl('', [Validators.required])
  quantity = new FormControl('', [Validators.required])

  addIngredient(ingredientName, ingredientQuantity, ingredientUnit) {
    const newIngredient = { ingredientName, ingredientQuantity, ingredientUnit }
    this.onIngredientAddedToList.emit(newIngredient)
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
