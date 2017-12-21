import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        CovalentModule,
        FormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
