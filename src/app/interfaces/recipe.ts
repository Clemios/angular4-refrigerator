import { Ingredient } from './ingredient'

export interface Recipe {
    id: number
    name: string
    description: string
    image: string
    ingredients: Ingredient[]
}
