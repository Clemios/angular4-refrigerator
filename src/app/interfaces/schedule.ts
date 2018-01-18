import { Recipe } from './recipe'

export interface Schedule {
    date: string
    recipes: Recipe[]
}
