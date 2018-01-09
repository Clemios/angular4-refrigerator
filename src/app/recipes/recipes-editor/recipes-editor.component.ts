import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-recipes-editor',
  templateUrl: './recipes-editor.component.html',
  styleUrls: ['./recipes-editor.component.css']
})
export class RecipesEditorComponent implements OnInit {

  @Input() recipeName: string
  @Input() recipeQuantity: number
  @Output() onRecipeAdded: EventEmitter<any> = new EventEmitter<any>()

  recipeUnit: 'mg' | 'g' | 'ml' | 'l'

  units = [
    { value: 'mg', label: 'Milligramme' },
    { value: 'g', label: 'Gramme' },
    { value: 'ml', label: 'Millilitre' },
    { value: 'l', label: 'Litre' }
  ]

  addRecipe(recipeName, recipeQuantity, recipeUnit) {
    const newRecipe = { recipeName, recipeQuantity, recipeUnit }
    console.log(newRecipe)
    this.onRecipeAdded.emit(newRecipe)
  }


  constructor() { }

  ngOnInit() {
    this.recipeUnit = 'g'
  }

}
