import { Component, OnInit, Inject } from '@angular/core'
import { Recipe } from '../interfaces/recipe'
import { RecipeService } from '../services/recipe.service'
import * as Noty from 'noty'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeService: any
  recipes: Recipe[]

  getRecipes() {
    return (this.recipeService.getRecipes()
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
          response.map((recipe) => {
            recipe.ingredients = JSON.parse(recipe.ingredients)
            console.log('IN MAP', recipe.ingredients)
          })
          this.recipes = response
          console.log(this.recipes)
        }
      })
    )
  }

  addRecipe(newRecipe) {
    console.log(newRecipe)
    return (this.recipeService.addRecipe(newRecipe)
      .subscribe((response) => {
        if (response.ok && JSON.parse(response._body).affectedRows === 1) {
          this.getRecipes()
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

  deleteRecipe(recipeId) {
    return (this.recipeService.deleteRecipe({ 'id': recipeId })
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
            text: 'Recette supprimée',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
          this.getRecipes()
        }
      })
    )
  }

  constructor( @Inject(RecipeService) recipeService) {
    this.recipeService = recipeService
    this.getRecipes()
  }

  ngOnInit() {

  }

}
