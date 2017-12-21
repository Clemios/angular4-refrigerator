import { Component, OnInit } from '@angular/core'
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'

@Component({
  selector: 'app-page-not-found',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private location: Location) { } // inject Location into class constructor

  ngOnInit() { }

  goBack: Function = () => {
    this.location.back() // <-- go back to previous location on cancel
  }
}
