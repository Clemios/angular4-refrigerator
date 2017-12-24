import { Component, OnInit, Inject } from '@angular/core'
import { IngredientService } from '../services/ingredient.service'

interface Ingredient {
  name: string
  quantity: string
  unit: string
  id: number
}

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.scss']
})
export class RefrigeratorComponent implements OnInit {

  ingredientService: any
  ingredients: any[] = []

  getIngredients() {
    return (this.ingredientService.getIngredients()
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      })
    )
  }

  addIngredient(newIngredient) {
    const ingredient = { name: newIngredient.ingredientName, quantity: newIngredient.ingredientQuantity, unit: newIngredient.ingredientUnit }
    return (this.ingredientService.addIngredient(ingredient)
      .subscribe((response) => {
        if (response.ok) {
          this.getIngredients()
        }
      })
    )
  }

  deleteIngredient(ingredientId) {
    return (this.ingredientService.deleteIngredient({ 'id': ingredientId })
      .subscribe((response) => {
        if (response.ok) {
          this.getIngredients()
        }
      })
    )
  }

  constructor( @Inject(IngredientService) ingredientService) {
    this.ingredientService = ingredientService
    this.getIngredients()
  }

  ngOnInit() {

  }

}
