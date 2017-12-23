import { Component } from '@angular/core'
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'
import { Router } from '@angular/router'


import { AuthenticationService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Refrigerator App'

  constructor(
    private router: Router,
    private authService: AuthenticationService) {
  }

  public logout() {
    this.authService
      .logout()
  }
}


