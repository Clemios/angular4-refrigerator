import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-log-writter',
  templateUrl: './log-writter.component.html',
  styleUrls: ['./log-writter.component.scss']
})
export class LogWritterComponent implements OnInit {

  @Input() logText: string
  @Output() onLogMessageAdded: EventEmitter<any> = new EventEmitter<any>()

  logMessage = ''

  logLevel: 'error' | 'succes' | 'debug' | 'infos'

  levels = [
    { value: 'error', viewValue: 'Erreur' },
    { value: 'succes', viewValue: 'Succes' },
    { value: 'debug', viewValue: 'Debug' },
    { value: 'infos', viewValue: 'Infos' }
  ]

  sendMessage(message, level) {
    const log = { message, level }
    console.log(log)
    this.onLogMessageAdded.emit(log)
  }


  constructor() { }

  ngOnInit() {
    this.logLevel = 'infos'
  }

}
