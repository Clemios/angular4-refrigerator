import { NgModule } from '@angular/core'
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core'
import {
  CovalentFileModule, CovalentDataTableModule,
  CovalentSearchModule, CovalentPagingModule
} from '@covalent/core'

// (optional) Additional Covalent Modules imports
// import { CovalentHttpModule } from '@covalent/http'
// import { CovalentHighlightModule } from '@covalent/highlight'
// import { CovalentMarkdownModule } from '@covalent/markdown'
// import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms'

@NgModule({
  imports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentFileModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule
  ],
  exports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentFileModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule
  ],
})
export class CovalentModule { }
