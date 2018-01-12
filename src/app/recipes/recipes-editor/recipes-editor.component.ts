import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { CONFIG } from '../../../../config'

@Component({
  selector: 'app-recipes-editor',
  templateUrl: './recipes-editor.component.html',
  styleUrls: ['./recipes-editor.component.scss']
})

export class RecipesEditorComponent implements OnInit {

  @Input() recipeName: string
  @Input() recipeDescription: number
  @Output() onRecipeAdded: EventEmitter<any> = new EventEmitter<any>()

  recipe = new FormControl('', [Validators.required])
  image: any
  imagePreview: string

  addRecipe(recipeName, recipeDescription) {
    const recipeImage = this.imagePreview
    const newRecipe = { recipeName, recipeDescription, recipeImage }
    console.log('NEW', newRecipe)
    this.onRecipeAdded.emit(newRecipe)
  }

  // Image methods
  selectEvent(image: File): void {
    // Ici je précharge le fichier et le convertis en base64 pour pouvoir l'enregistrer
    this.image = image
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = () => {
      this.imagePreview = 'data:' + image.type + ';base64,' + reader.result.split(',')[1]
    }
  }
  cancelEvent(): void {
    this.imagePreview = ''
  }
  // END FILE INPUT


  constructor() {
  }

  ngOnInit() {
  }

  public getRecipeErrorMessage() {
    return this.recipe.hasError('required') ? 'You must enter a value' : ''
  }

}
