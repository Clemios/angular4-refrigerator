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

  recipeUnit: 'mg' | 'g' | 'ml' | 'l'

  units = [
    { value: 'mg', label: 'Milligramme' },
    { value: 'g', label: 'Gramme' },
    { value: 'ml', label: 'Millilitre' },
    { value: 'l', label: 'Litre' }
  ]

  recipe = new FormControl('', [Validators.required])
  file: any
  imagePreview: string
  fileSelectMsg = 'No file selected yet.'
  fileUploadMsg = 'No file uploaded yet.'
  disabled: boolean

  addRecipe(recipeName, recipeDescription) {
    const recipeImage = this.imagePreview
    const newRecipe = { recipeName, recipeDescription, recipeImage }
    console.log('NEW', newRecipe)
    this.onRecipeAdded.emit(newRecipe)
  }

  /// FILE INPUT
  selectEvent(file: File): void {
    this.fileSelectMsg = file.name
    this.file = file
    console.log('SELECT:', this.file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.imagePreview = 'data:' + file.type + ';base64,' + reader.result.split(',')[1]
    }
  }

  cancelEvent(): void {
    this.fileSelectMsg = 'No file selected yet.'
    this.fileUploadMsg = 'No file uploaded yet.'
    this.imagePreview = ''
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled
  }
  /// END FILE INPUT


  constructor() {
  }

  ngOnInit() {
  }

  public getRecipeErrorMessage() {
    return this.recipe.hasError('required') ? 'You must enter a value' : ''
  }

}
