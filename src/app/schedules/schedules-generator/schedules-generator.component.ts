import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Schedule } from '../../interfaces/schedule'


@Component({
  selector: 'app-schedules-generator',
  templateUrl: './schedules-generator.component.html',
  styleUrls: ['./schedules-generator.component.css']
})
export class SchedulesGeneratorComponent implements OnInit {

  @Input('schedules') schedules: Schedule[]
  @Output() onScheduleAdded: EventEmitter<any> = new EventEmitter<any>()
  @Output() onGetMainSchedule: EventEmitter<any> = new EventEmitter<any>()
  @Output() onGetSchedule: EventEmitter<any> = new EventEmitter<any>()

  addSchedule(scheduleName) {
    this.onScheduleAdded.emit(scheduleName)
  }

  getSchedule(scheduleId) {
    this.onGetSchedule.emit(scheduleId)
  }

  getMainSchedule(scheduleName) {
    this.onGetMainSchedule.emit()
  }

  constructor() { }

  ngOnInit() {
  }

}
