import { Component, OnInit, Inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Recipe } from '../../interfaces/recipe'
import { RecipeService } from '../../services/recipe.service'
import * as Noty from 'noty'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipeService: any
  recipe: Recipe

  getRecipe(recipeId) {
    return (this.recipeService.getRecipe({ 'id': recipeId })
      .subscribe((response) => {
        console.log('RESPONSE', response)
        if (response.errno) {
          new Noty({
            text: 'DATABASE ERROR',
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          this.recipe = response
        }
      })
    )
  }

  constructor( @Inject(RecipeService) recipeService, route: ActivatedRoute) {
    this.recipeService = recipeService
    this.getRecipe(route.snapshot.params['id'])
    console.log(route.snapshot.params['id'])
  }

  ngOnInit() {
  }

}
