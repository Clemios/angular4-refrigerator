import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Ingredient } from '../../interfaces/ingredient'
import { Recipe } from '../../interfaces/recipe'

import { CONFIG } from '../../../../config'

@Component({
  selector: 'app-recipes-editor',
  templateUrl: './recipes-editor.component.html',
  styleUrls: ['./recipes-editor.component.scss']
})

export class RecipesEditorComponent implements OnInit {

  @Input() recipeName: string
  @Input() recipeDescription: number
  @Output() onRecipeAdded: EventEmitter<any> = new EventEmitter<any>()

  ingredientUnit: 'mg' | 'g' | 'ml' | 'l'

  units = [
    { value: 'mg', label: 'Milligramme' },
    { value: 'g', label: 'Gramme' },
    { value: 'ml', label: 'Millilitre' },
    { value: 'l', label: 'Litre' }
  ]

  recipe = new FormControl('', [Validators.required])
  image: any
  imagePreview: string
  ingredients: Ingredient[] = []

  ingredient = new FormControl('', [Validators.required])
  quantity = new FormControl('', [Validators.required])

  addRecipe(recipeName, recipeDescription) {
    const recipeImage = this.imagePreview
    const recipeIngredients = this.ingredients
    const newRecipe: Recipe = { name: recipeName, description: recipeDescription, image: recipeImage, ingredients: recipeIngredients }
    this.onRecipeAdded.emit(newRecipe)
  }

  addIngredient(ingredientName, ingredientQuantity, ingredientUnit) {
    const newIngredient: Ingredient = { name: ingredientName, quantity: ingredientQuantity, unit: ingredientUnit }
    this.ingredients.push(newIngredient)
  }

  // Image methods
  selectEvent(image: File): void {
    // Ici je précharge le fichier et le convertis en base64 pour pouvoir l'enregistrer
    this.image = image
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = () => {
      this.imagePreview = 'data:' + image.type + ';base64,' + reader.result.split(',')[1]
    }
  }
  cancelEvent(): void {
    this.imagePreview = ''
  }
  // END FILE INPUT


  constructor() {
  }

  ngOnInit() {
    this.ingredientUnit = 'g'
  }

  public getRecipeErrorMessage() {
    return this.recipe.hasError('required') ? 'You must enter a value' : ''
  }

  public getIngredientErrorMessage() {
    return this.ingredient.hasError('required') ? 'You must enter a value' : ''
  }
  public getQuantityErrorMessage() {
    return this.quantity.hasError('required') ? 'You must enter a numeric value' : ''
  }

}
