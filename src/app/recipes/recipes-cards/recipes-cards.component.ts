import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-recipes-cards',
  templateUrl: './recipes-cards.component.html',
  styleUrls: ['./recipes-cards.component.scss']
})
export class RecipesCardsComponent implements OnInit {

  @Input('recipes') recipes: any[]
  @Output() onRecipeAdded: EventEmitter<any> = new EventEmitter<any>()
  @Output() onRecipeDeleted: EventEmitter<any> = new EventEmitter<any>()

  isFlipped = false

  constructor() { }

  ngOnInit() {
  }

  flipTile(isFlipped): void {
    this.isFlipped = !isFlipped
  }

  addRecipe(newRecipe) {
    this.onRecipeAdded.emit(newRecipe)
    this.isFlipped = !this.isFlipped
  }

  deleteRecipe(recipeId) {
    this.onRecipeDeleted.emit(recipeId)
  }

}
