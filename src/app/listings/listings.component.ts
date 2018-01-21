import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core'
import { Listing } from '../interfaces/listing'
import { Ingredient } from '../interfaces/ingredient'
import { ListingService } from '../services/listing.service'

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  listingService: any
  listings: Listing[]
  listing: any

  getListings() {
    return (this.listingService.getListings()
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE: ' + response.errno,
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

  getListing(listingId) {
    return (this.listingService.getListing({ 'id': listingId })
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE: ' + response.errno,
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          this.listing = response
        }
      })
    )
  }

  getMainListing() {
    return (this.listingService.getMainListing()
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE: ' + response.errno,
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          this.listing = response
        }
      })
    )
  }

  addListing(listingName) {
    const listing = { name: listingName }
    return (this.listingService.addListing(listing)
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE: ' + response.errno,
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          new Noty({
            text: 'Liste ajoutée !',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
          this.getListings()
        }
      })
    )
  }

  addIngredientToListing(newIngredientToListing) {
    const newIngredient: Ingredient = {
      name: newIngredientToListing.ingredientName,
      quantity: newIngredientToListing.ingredientQuantity,
      unit: newIngredientToListing.ingredientUnit
    }
    let newIngredients: Ingredient[]
    newIngredients = JSON.parse(this.listing.ingredients)
    newIngredients.push(newIngredient)
    return (this.listingService.addIngredientToList({ 'id': newIngredientToListing.listingId, 'ingredients': JSON.stringify(newIngredients) })
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE: ' + response.errno,
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          new Noty({
            text: 'Ingrédient ajouté',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
          this.getListing(this.listing.id)
        }
      })
    )
  }

  deleteIngredientFromListing(ingredientId) {
    let newIngredients: Ingredient[]
    newIngredients = JSON.parse(this.listing.ingredients)
    newIngredients.splice(ingredientId, 1)
    return (this.listingService.deleteIngredientFromList({ 'id': this.listing.id, 'ingredients': JSON.stringify(newIngredients) })
      .subscribe((response) => {
        if (response.errno) {
          new Noty({
            text: 'DATABASE: ' + response.errno,
            layout: 'topRight',
            type: 'error',
            theme: 'mint',
            timeout: 3000,
          }).show()
        } else {
          new Noty({
            text: 'Ingrédient supprimé',
            layout: 'topRight',
            type: 'success',
            theme: 'mint',
            timeout: 3000,
          }).show()
          this.getListing(this.listing.id)
        }
      })
    )
  }

  constructor( @Inject(ListingService) listingService) {
    this.listingService = listingService
    this.getListings()
  }

  ngOnInit() {
  }

}
