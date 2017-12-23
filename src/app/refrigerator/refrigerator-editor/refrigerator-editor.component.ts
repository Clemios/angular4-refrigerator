import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-refrigerator-editor',
  templateUrl: './refrigerator-editor.component.html',
  styleUrls: ['./refrigerator-editor.component.scss']
})
export class RefrigeratorEditorComponent implements OnInit {

  @Input() ingredientName: string
  @Input() ingredientQuantity: number
  @Output() onIngredientAdded: EventEmitter<any> = new EventEmitter<any>()

  ingredientUnit: 'mg' | 'g' | 'ml' | 'l'

  units = [
    { value: 'mg', label: 'Milligramme' },
    { value: 'g', label: 'Gramme' },
    { value: 'ml', label: 'Millilitre' },
    { value: 'l', label: 'Litre' }
  ]

  addIngredient(ingredientName, ingredientQuantity, ingredientUnit) {
    const newIngredient = { ingredientName, ingredientQuantity, ingredientUnit }
    console.log(newIngredient)
    this.onIngredientAdded.emit(newIngredient)
  }


  constructor() { }

  ngOnInit() {
    this.ingredientUnit = 'g'
  }

}
