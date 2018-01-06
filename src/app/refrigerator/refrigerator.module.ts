import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { RefrigeratorRoutingModule } from './refrigerator-routing.module'

import { RefrigeratorComponent } from './refrigerator.component'
import { RefrigeratorListComponent } from './refrigerator-list/refrigerator-list.component'
import { RefrigeratorEditorComponent } from './refrigerator-editor/refrigerator-editor.component'

import { IngredientService } from '../services/ingredient.service'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RefrigeratorRoutingModule,
        MaterialModule,
        CovalentModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        RefrigeratorComponent,
        RefrigeratorListComponent,
        RefrigeratorEditorComponent
    ],
    providers: [IngredientService],
})
export class RefrigeratorModule { }
