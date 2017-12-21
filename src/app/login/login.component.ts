import { Component, OnInit, HostBinding, Input } from '@angular/core'
import { Router } from '@angular/router'

import { AuthenticationService } from '../services/auth.service'

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

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  public login() {
    this.authService
      .login()
      .subscribe(() => this.router.navigateByUrl('/'))
  }

}
