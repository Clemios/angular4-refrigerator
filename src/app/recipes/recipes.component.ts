import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: any[] = [{
    'name': 'Tarte aux Pommes',
    'description': 'Une délicieuse tarte aux pommes',
    'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'ingredients': [
      {
        'name': 'Pâte a tarte',
        'quantity': '100',
        'unit': 'g'
      },
      {
        'name': 'Pomme',
        'quantity': '600',
        'unit': 'g'
      }
    ]
  },
  {
    'name': 'Tarte aux Prunes',
    'description': 'La reine des tartes aux prunes',
    'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'ingredients': [
      {
        'name': 'Pâte a tarte',
        'quantity': '100',
        'unit': 'g'
      },
      {
        'name': 'Prune',
        'quantity': '600',
        'unit': 'g'
      },
      {
        'name': 'Sucre',
        'quantity': '50',
        'unit': 'g'
      }
    ]
  },
  {
    'name': 'Tarte aux Figues',
    'description': 'L\'apothéose de la tarte aux figues',
    'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'ingredients': [
      {
        'name': 'Pâte a tarte',
        'quantity': '100',
        'unit': 'g'
      },
      {
        'name': 'Figue',
        'quantity': '600',
        'unit': 'g'
      },
      {
        'name': 'Sucre',
        'quantity': '75',
        'unit': 'g'
      }
    ]
  },
  {
    'name': 'Tarte aux Quetsches',
    'description': 'Une sublime tarte aux quetsches',
    'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'ingredients': [
      {
        'name': 'Pâte a tarte',
        'quantity': '100',
        'unit': 'g'
      },
      {
        'name': 'Quetsche',
        'quantity': '600',
        'unit': 'g'
      }
    ]
  }]

  addRecipe(newRecipe) {
    console.log(newRecipe)
    const recipe = { name: newRecipe.recipeName, quantity: newRecipe.recipeQuantity, unit: newRecipe.recipeUnit }
    this.recipes.push(recipe)
    console.log(this.recipes)
  }

  constructor() { }

  ngOnInit() {
  }

}
