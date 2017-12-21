import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material'
import {
  MatToolbarModule, MatSidenavModule, MatMenuModule,
  MatSelectModule
} from '@angular/material'
import { MatTabsModule } from '@angular/material/tabs'
import { MatListModule, MatCardModule } from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
})
export class MaterialModule { }
