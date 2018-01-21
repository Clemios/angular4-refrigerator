import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material'
import {
  MatToolbarModule, MatSidenavModule, MatMenuModule,
  MatSelectModule
} from '@angular/material'
import { MatTabsModule } from '@angular/material/tabs'
import { MatDialogModule } from '@angular/material/dialog'
import { MatListModule, MatCardModule } from '@angular/material'
import { MatGridListModule } from '@angular/material/grid-list'

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
    MatInputModule,
    MatGridListModule,
    MatDialogModule
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
    MatInputModule,
    MatGridListModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
