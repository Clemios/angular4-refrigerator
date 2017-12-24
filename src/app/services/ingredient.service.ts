import { Injectable, Inject } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { CONFIG } from '../../../config'
import { map } from 'rxjs/operators'


export class IngredientService {

    http: any

    constructor( @Inject(Http) http) {
        this.http = http
    }

    getIngredients() {
        return this.http.get('http://localhost:' + CONFIG.INGREDIENT.port).pipe(
            map((res: Response) => res.json())
        )
    }

    addIngredient(data) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        const options = new RequestOptions({
            headers: headers
        })
        return this.http.post('http://localhost:' + CONFIG.INGREDIENT.port + '/addingredient', JSON.stringify(data), options)
            .map((res: Response) => res.json())
    }


}
