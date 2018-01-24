import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CalendarModule } from 'angular-calendar'
import { MaterialModule } from '../material.module'
import { CovalentModule } from '../covalent.module'

import { SchedulesRoutingModule } from './schedules-routing.module'

import { SchedulesComponent } from './schedules.component'
import { CalendarComponent } from './calendar/calendar.component'
import { SchedulesGeneratorComponent } from './schedules-generator/schedules-generator.component'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SchedulesRoutingModule,
    MaterialModule,
    CovalentModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot()
  ],
  declarations: [SchedulesComponent, CalendarComponent, SchedulesGeneratorComponent]
})
export class SchedulesModule { }
