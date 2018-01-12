import { Component, OnInit } from '@angular/core'
import { CalendarEvent } from 'angular-calendar'
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  getDay
} from 'date-fns'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  viewDate: Date

  constructor() { }

  ngOnInit() {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }['week']

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }['week']
    this.viewDate = new Date()
    const tommorow = new Date()
    const firstDay = new Date()
    firstDay.setDate(getStart(this.viewDate))
    tommorow.setDate(this.viewDate.getDate() + 1)
    const secondDay = new Date()
    console.log(getStart(this.viewDate))
    secondDay.setDate(firstDay.getDate() + 1)
    console.log('FIRST DAY', format(getStart(this.viewDate), 'YYYY-MM-DD'))
    console.log('SECOND DAY', format(getStart(this.viewDate), 'YYYY-MM-DD'))
    console.log(secondDay)
  }

}
