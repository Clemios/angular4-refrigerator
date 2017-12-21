import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.scss']
})
export class RefrigeratorComponent implements OnInit {

  ingredients: any[] = [{
    'name': 'Mon premier ingrédient',
    'quantity': '1',
    'unit': 'g'
  },
  {
    'name': 'Tomate',
    'quantity': '2',
    'unit': 'g'
  }]

  addIngredient(newIngredient) {
    console.log(newIngredient)
    const ingredient = { name: newIngredient.ingredientName, quantity: newIngredient.ingredientQuantity, unit: newIngredient.ingredientUnit }
    this.ingredients.push(ingredient)
    console.log(this.ingredients)
  }

  constructor() { }

  ngOnInit() {
  }

}
