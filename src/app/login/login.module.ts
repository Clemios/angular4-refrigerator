import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { UserService } from '../services/user.service'

import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'
import { RefrigeratorModule } from '../refrigerator/refrigerator.module'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        LoginRoutingModule,
        MaterialModule,
        CovalentModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        RefrigeratorModule
    ],
    providers: [UserService],
    declarations: [LoginComponent]
})
export class LoginModule { }
