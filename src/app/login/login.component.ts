import { Component, OnInit, HostBinding, Input } from '@angular/core'

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

  constructor() { }

  ngOnInit() {
  }

}
