import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material'
import { ActivatedRoute } from '@angular/router'
import { Recipe } from '../../interfaces/recipe'
import { Ingredient } from '../../interfaces/ingredient'
import { RecipeService } from '../../services/recipe.service'
import { IngredientService } from '../../services/ingredient.service'

import { RecipesEditorComponent } from '../recipes-editor/recipes-editor.component'

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

  editRecipe(newRecipe) {
    return (this.recipeService.editRecipe(newRecipe)
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
          new Noty({
            text: 'Recette modifiée !',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
          this.getRecipe(newRecipe.id)
        }
      })
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RecipesEditorComponent, {
      width: '60%',
      data: { action: 'edit', recipeId: this.recipe.id, recipeName: this.recipe.name, recipeDescription: this.recipe.description, recipeIngredients: this.recipe.ingredients }
    })
    const sub = dialogRef.componentInstance.onRecipeEdited.subscribe((result) => {
      this.editRecipe(result)
      dialogRef.close()
    })
  }

  constructor( @Inject(RecipeService) recipeService, @Inject(IngredientService) ingredientService, public dialog: MatDialog, route: ActivatedRoute) {
    this.recipeService = recipeService
    this.getRecipe(route.snapshot.params['id'])
    this.ingredientService = ingredientService
    this.getIngredients()
  }

  ngOnInit() {
  }

}
