import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { ListsRoutingModule } from './lists-routing.module'

import { ListsComponent } from './lists.component'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ListsRoutingModule,
    MaterialModule,
    CovalentModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListsComponent]
})
export class ListsModule { }
