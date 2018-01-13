import { Ingredient } from './ingredient'

export interface Recipe {
    name: string
    description: string
    image: string
    ingredients: Ingredient[]
}
