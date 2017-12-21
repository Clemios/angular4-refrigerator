import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material'
import {
  MatToolbarModule, MatSidenavModule, MatMenuModule,
  MatSelectModule
} from '@angular/material'
import { MatListModule, MatCardModule } from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
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
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
})
export class MaterialModule { }
