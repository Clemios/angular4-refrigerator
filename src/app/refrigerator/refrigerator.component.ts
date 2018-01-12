import { Component, OnInit, Inject } from '@angular/core'
import { IngredientService } from '../services/ingredient.service'
import * as Noty from 'noty'

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
  ingredients: Ingredient[] = []

  getIngredients() {
    return (this.ingredientService.getIngredients()
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE ERROR',
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          this.ingredients = response
        }
      })
    )
  }

  addIngredient(newIngredient) {
    const ingredient = { name: newIngredient.ingredientName, quantity: newIngredient.ingredientQuantity, unit: newIngredient.ingredientUnit }
    return (this.ingredientService.addIngredient(ingredient)
      .subscribe((response) => {
        if (response.ok && JSON.parse(response._body).affectedRows === 1) {
          this.getIngredients()
          new Noty({
            text: 'Ingrédient ajouté',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          new Noty({
            text: 'ERREUR',
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        }
      })
    )
  }

  deleteIngredient(ingredientId) {
    return (this.ingredientService.deleteIngredient({ 'id': ingredientId })
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE ERROR',
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          new Noty({
            text: 'Ingrédient supprimé',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
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
