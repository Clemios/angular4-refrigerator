import { Injectable, Inject } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { CONFIG } from '../../../config'
import { map } from 'rxjs/operators'


export class RecipeService {

    http: any

    constructor( @Inject(Http) http) {
        this.http = http
    }

    getRecipes() {
        return this.http.get('http://localhost:' + CONFIG.RECIPE.port).pipe(
            map((res: Response) => res.json())
        )
    }

    getRecipe(data) {
        return this.http.post('http://localhost:' + CONFIG.RECIPE.port + '/get', data).pipe(
            map((res: Response) => res.json())
        )
    }

    addRecipe(data) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        const options = new RequestOptions({
            headers: headers
        })
        return this.http.post('http://localhost:' + CONFIG.RECIPE.port + '/addrecipe', JSON.stringify(data), options).pipe(
            map((res: Response) => (res))
        )
    }

    deleteRecipe(data) {
        return this.http.post('http://localhost:' + CONFIG.RECIPE.port + '/deleterecipe', data).pipe(
            map((res: Response) => (res.json()))
        )
    }


}
