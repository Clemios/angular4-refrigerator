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

  view = 'month'

  viewDate: Date = new Date()



  constructor() { }

  ngOnInit() {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view]

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view]
    console.log(getDay(new Date(2018, 1, 3)))
    console.log(format(getStart(this.viewDate), 'YYYY-MM-DD'))
  }

}
