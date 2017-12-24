import { Component, OnInit, Inject } from '@angular/core'
import { IngredientService } from '../services/ingredient.service'

interface I {
  name: string
  description: string
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
      .subscribe((ingredients: I[]) => {
        this.ingredients = ingredients
      })
    )
  }

  addIngredient(newIngredient) {
    const ingredient = { name: newIngredient.ingredientName, quantity: newIngredient.ingredientQuantity, unit: newIngredient.ingredientUnit }
    return (this.ingredientService.addIngredient(ingredient)
      .subscribe((response) => {
        if (response.affectedRows === 1) {
          this.ingredients.push(ingredient)
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
