import { Component, HostListener } from '@angular/core'
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'
import { Router } from '@angular/router'


import { AuthenticationService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Refrigerator App'

  // // Methode pour logout à la fermeture de l'app
  // @HostListener('window:beforeunload') onWindowUnload() {
  //   this.logout()
  // }

  constructor(
    private router: Router,
    private authService: AuthenticationService) {
  }

  public logout() {
    this.authService
      .logout()
  }



}


