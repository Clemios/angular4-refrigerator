import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { RefrigeratorRoutingModule } from './refrigerator-routing.module'

import { RefrigeratorComponent } from './refrigerator.component'
import { RefrigeratorListComponent } from './refrigerator-list/refrigerator-list.component'
import { RefrigeratorEditorComponent } from './refrigerator-editor/refrigerator-editor.component'

@NgModule({
    imports: [
        CommonModule,
        RefrigeratorRoutingModule,
        MaterialModule,
        CovalentModule,
        FlexLayoutModule,
        FormsModule
    ],
    declarations: [
        RefrigeratorComponent,
        RefrigeratorListComponent,
        RefrigeratorEditorComponent
    ]
})
export class RefrigeratorModule { }
