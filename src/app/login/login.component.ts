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
  request = {
    url: 'http://localhost:4500/check',
  }

  constructor(
    @Inject(UserService) userService,
    public http: HttpClient,
    private router: Router,
    private authService: AuthenticationService) {
    this.userService = userService
  }

  ngOnInit() {
  }

  signin(signinEmail, signinPassword) {
    this.checkForSignin(signinEmail, signinPassword).subscribe((loggedUser: LoggedUser) => {
      if (!isEmpty(loggedUser)) {
        this.loggedUser = loggedUser
        console.log('loggedUser', this.loggedUser)
        this.login()
      } else {
        console.log('USER NOT FOUND')
        new Noty({
          text: 'USER NOT FOUND',
          layout: 'topRight',
          type: 'error',
          theme: 'mint',
          timeout: 3000,
        }).show()
      }
    })
  }

  checkForSignin(signinEmail, signinPassword) {
    const data = { email: signinEmail, password: signinPassword }
    return (this.userService.checkUser(data)
      .map(res => res)
    )
  }

  public signup() {
  }

  public login() {
    this.authService
      .login()
      .subscribe(() => this.router.navigateByUrl('/'))
  }

}
