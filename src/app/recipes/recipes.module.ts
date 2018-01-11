import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { RecipesRoutingModule } from './recipes-routing.module'

import { RecipesComponent } from './recipes.component'
import { RecipesListComponent } from './recipes-list/recipes-list.component'
import { RecipesCardsComponent } from './recipes-cards/recipes-cards.component'
import { RecipesEditorComponent } from './recipes-editor/recipes-editor.component'

import { RecipeService } from '../services/recipe.service'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RecipesRoutingModule,
        MaterialModule,
        CovalentModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesCardsComponent,
        RecipesEditorComponent
    ],
    providers: [RecipeService],
})
export class RecipesModule { }
