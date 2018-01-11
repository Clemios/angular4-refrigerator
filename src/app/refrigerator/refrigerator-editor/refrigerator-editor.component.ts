import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { RecipeService } from '../../services/recipe.service'


@Component({
  selector: 'app-refrigerator-editor',
  templateUrl: './refrigerator-editor.component.html',
  styleUrls: ['./refrigerator-editor.component.scss']
})
export class RefrigeratorEditorComponent implements OnInit {

  @Input() ingredientName: string
  @Input() ingredientQuantity: number
  @Output() onIngredientAdded: EventEmitter<any> = new EventEmitter<any>()

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
    console.log(this.quantity.errors)
    const newIngredient = { ingredientName, ingredientQuantity, ingredientUnit }
    this.onIngredientAdded.emit(newIngredient)
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
