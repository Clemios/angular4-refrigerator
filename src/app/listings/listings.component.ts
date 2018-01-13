import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Listing } from '../interfaces/listing'
import { ListingService } from '../services/listing.service'

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  listingService: any
  listings: Listing[] = []
  listingName: string

  name = new FormControl('', [Validators.required])


  getListings() {
    return (this.listingService.getListings()
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE ERROR',
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          this.listings = response
        }
      })
    )
  }

  addListing(listingName) {
    const listing = { name: listingName }
    return (this.listingService.addListing(listing)
      .subscribe((response) => {
        if (response.ok) {
          this.getListings()
          new Noty({
            text: 'Liste ajoutée',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          new Noty({
            text: 'ERREUR',
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        }
      })
    )
  }

  addIngredientToListing(newIngredient) {
    const ingredient = { name: newIngredient.ingredientName, quantity: newIngredient.ingredientQuantity, unit: newIngredient.ingredientUnit }
    return (this.listingService.addIngredient(ingredient)
      .subscribe((response) => {
        if (response.ok) {
          this.getListings()
          new Noty({
            text: 'Ingrédient ajouté',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          new Noty({
            text: 'ERREUR',
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        }
      })
    )
  }

  constructor( @Inject(ListingService) listingService) {
    this.listingService = listingService
    // this.getListings()
  }

  ngOnInit() {
  }

  public getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : ''
  }

}
