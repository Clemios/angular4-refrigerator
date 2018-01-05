import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-recipes-cards',
  templateUrl: './recipes-cards.component.html',
  styleUrls: ['./recipes-cards.component.css']
})
export class RecipesCardsComponent implements OnInit {

  @Input('recipes') recipes: any[]

  isFlipped = false

  constructor() { }

  ngOnInit() {
    console.log('RECIPES', this.recipes)
  }

  flipTile(isFlipped): void {
    console.log(isFlipped)
    this.isFlipped = !isFlipped
  }

}
