import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { SchedulesRoutingModule } from './schedules-routing.module'

import { SchedulesComponent } from './schedules.component'
import { CalendarComponent } from './calendar/calendar.component'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SchedulesRoutingModule,
    MaterialModule,
    CovalentModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SchedulesComponent, CalendarComponent]
})
export class SchedulesModule { }
