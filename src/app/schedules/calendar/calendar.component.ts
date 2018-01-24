import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { CalendarEvent, CalendarEventTitleFormatter, CalendarEventTimesChangedEvent, CalendarEventAction } from 'angular-calendar'
import { startOfDay, addHours, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addWeeks, subWeeks, addMonths, subMonths } from 'date-fns'


@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  locale = 'fr'
  viewDate: Date = new Date()
  clickedDate: Date
  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  }

  actions: CalendarEventAction[] = [
    {
      label: '<mat-icon svgIcon="create"></mat-icon>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event)
      }
    },
    {
      label: '<mat-icon svgIcon="thumbs-up"></mat-icon>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event)
        this.handleEvent('Deleted', event)
      }
    }
  ]

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: this.colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: this.colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: this.colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ]

  modalData: {
    action: string;
    event: CalendarEvent;
  }

  refresh: Subject<any> = new Subject()

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart
    event.end = newEnd
    this.handleEvent('Dropped or resized', event)
    this.refresh.next()
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action }
    console.log(event)
    console.log(action)

    // this.modal.open(this.modalContent, { size: 'lg' })
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: this.colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    })
    this.refresh.next()
  }

  increment(): void {

    const addFn: any = {
      day: addDays,
      week: addWeeks,
      month: addMonths
    }['week']

    this.viewDate = addFn(this.viewDate, 1)

  }

  decrement(): void {

    const subFn: any = {
      day: subDays,
      week: subWeeks,
      month: subMonths
    }['week']

    this.viewDate = subFn(this.viewDate, 1)

  }


  constructor() { }

  ngOnInit() {
    // const getStart: any = {
    //   month: startOfMonth,
    //   week: startOfWeek,
    //   day: startOfDay
    // }['week']

    // const getEnd: any = {
    //   month: endOfMonth,
    //   week: endOfWeek,
    //   day: endOfDay
    // }['week']
    // this.viewDate = new Date()
    // const tommorow = new Date()
    // const firstDay = new Date()
    // firstDay.setDate(getStart(this.viewDate))
    // tommorow.setDate(this.viewDate.getDate() + 1)
    // const secondDay = new Date()
    // console.log(getStart(this.viewDate))
    // secondDay.setDate(firstDay.getDate() + 1)
    // console.log('FIRST DAY', format(getStart(this.viewDate), 'YYYY-MM-DD'))
    // console.log('SECOND DAY', format(getStart(this.viewDate), 'YYYY-MM-DD'))
    // console.log(secondDay)
  }

}

export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {

  week(event: CalendarEvent): string {
    return `Custom prefix: ${event.title}`
  }

}
