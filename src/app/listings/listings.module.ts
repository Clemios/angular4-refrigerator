import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { ListingsRoutingModule } from './listings-routing.module'

import { ListingsComponent } from './listings.component'
import { ListingsListComponent } from './listings-list/listings-list.component'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ListingsRoutingModule,
    MaterialModule,
    CovalentModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListingsComponent, ListingsListComponent]
})
export class ListingsModule { }
