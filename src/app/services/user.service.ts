import {
	Injectable,
	Inject
} from '@angular/core'
import {
	Http,
	Headers,
	RequestOptions
} from '@angular/http'
import { CONFIG } from '../../../config'



export class UserService {

	http: any

	constructor( @Inject(Http) http) {
		this.http = http
	}

	getUsers() {
		return this.http.get('http://localhost:' + CONFIG.USER.port)
	}

	checkUser(data) {
		const headers = new Headers({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Headers': 'Origin',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': '*',

		})
		const options = new RequestOptions({
			headers: headers
		})

		return this.http.post('http://localhost:' + CONFIG.USER.port + '/check', JSON.stringify(data), options)
			.map((res) => { if (res._body !== '') { return res.json() } else { return {} } })
	}

	addUser(data) {
		const headers = new Headers({
			'Content-Type': 'application/json'
		})
		const options = new RequestOptions({
			headers: headers
		})

		return this.http.post('http://localhost:4500/adduser', JSON.stringify(data), options)
			.map(res => res.json())
	}


}
