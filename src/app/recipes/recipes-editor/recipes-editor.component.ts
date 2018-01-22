import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material'
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
  @Output() onRecipeEdited: EventEmitter<any> = new EventEmitter<any>()


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
  ingredients: Ingredient[]

  ingredient = new FormControl('', [Validators.required])
  quantity = new FormControl('', [Validators.required])

  addRecipe(recipeName, recipeDescription) {
    const recipeImage = this.imagePreview
    const recipeIngredients = this.ingredients
    const newRecipe = { name: recipeName, description: recipeDescription, image: recipeImage, ingredients: JSON.stringify(recipeIngredients) }
    this.onRecipeAdded.emit(newRecipe)
  }

  editRecipe(redipeId, recipeName, recipeDescription) {
    // const recipeImage = this.imagePreview
    const recipeIngredients = this.ingredients
    const editedRecipe = { id: redipeId, name: recipeName, description: recipeDescription, ingredients: JSON.stringify(recipeIngredients) }
    this.onRecipeEdited.emit(editedRecipe)

  }

  openDialog(id, name, quantity, unit): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { id, name, quantity, unit }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ingredients[result.id].quantity = result.quantity
      }
    })
  }

  addIngredient(ingredientName, ingredientQuantity, ingredientUnit) {
    const newIngredient: Ingredient = { name: ingredientName, quantity: ingredientQuantity, unit: ingredientUnit }
    this.ingredients.push(newIngredient)
  }

  deleteIngredient(ingredientId) {
    this.ingredients.splice(ingredientId, 1)
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


  constructor(public dialogRef: MatDialogRef<RecipesEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    this.ingredients = []
    if (data.recipeIngredients) {
      this.ingredients = data.recipeIngredients
    }
  }

  ngOnInit() {
    this.ingredientUnit = 'g'
  }

  onNoClick(): void {
    this.dialogRef.close()
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

@Component({
  selector: 'app-dialog-component',
  templateUrl: 'dialog-component.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close()
  }

}
