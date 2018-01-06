import { Component, OnInit, Input, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'
import * as Noty from 'noty'
import isEmpty from 'lodash/isEmpty'

import { UserService } from '../services/user.service'

import { AuthenticationService } from '../services/auth.service'

interface LoggedUser {
  email: string
  nickname: string
  password: string
  id: number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() signinEmail: string
  @Input() signinPassword: string

  @Input() signupEmail: string
  @Input() signupNickname: string
  @Input() signupPassword: string
  @Input() signupPasswordConfirm: string

  userService: any
  public loggedUser: LoggedUser

  constructor(
    @Inject(UserService) userService,
    private router: Router,
    private authService: AuthenticationService) {
    this.userService = userService
  }

  ngOnInit() {
  }

  signin(signinEmail, signinPassword) {
    this.checkForSignin(signinEmail, signinPassword).subscribe((response) => {
      if (response.errno) {
        // En cas d' erreur retoutnée par le microservice user
        console.log(response)
        new Noty({
          text: 'DATABASE ERROR',
          layout: 'topRight',
          type: 'error',
          theme: 'mint',
          timeout: 3000,
        }).show()
      } else if (isEmpty(response)) {
        // Si la réponse est vide = aucun user trouvé en base
        new Noty({
          text: 'USER NOT FOUND',
          layout: 'topRight',
          type: 'error',
          theme: 'mint',
          timeout: 3000,
        }).show()
      } else {
        this.login()
      }
    })
  }

  // Vérifier si l'user existe en base
  checkForSignin(signinEmail, signinPassword) {
    const data = { email: signinEmail, password: signinPassword }
    return (this.userService.checkUser(data).map(res => res)
    )
  }

  // Créer le token de session qui permet de log l'utilisateur puis le rediriger
  public login() {
    this.authService.login().subscribe(() => this.router.navigateByUrl('/'))
  }

  public signup() {
  }

}
