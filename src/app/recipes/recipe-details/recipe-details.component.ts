import { Component, OnInit, Inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Recipe } from '../../interfaces/recipe'
import { Ingredient } from '../../interfaces/ingredient'
import { RecipeService } from '../../services/recipe.service'
import { IngredientService } from '../../services/ingredient.service'

import * as Noty from 'noty'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipeService: any
  recipe: Recipe
  ingredientService: any
  ingredients: Ingredient[]


  getRecipe(recipeId) {
    return (this.recipeService.getRecipe({ 'id': recipeId })
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE: ' + response.code,
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          response.ingredients = JSON.parse(response.ingredients)
          this.recipe = response
        }
      })
    )
  }

  getIngredients() {
    return (this.ingredientService.getIngredients()
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE: ' + response.code,
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

  constructor( @Inject(RecipeService) recipeService, @Inject(IngredientService) ingredientService, route: ActivatedRoute) {
    this.recipeService = recipeService
    this.getRecipe(route.snapshot.params['id'])
    this.ingredientService = ingredientService
    this.getIngredients()
  }

  ngOnInit() {
  }

}
