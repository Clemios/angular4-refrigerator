import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logMessages: any[] = [{
    'message': 'LOREM IPSUM MAGGLE',
    'level': 'infos',
  },
  {
    'message': 'mega erreur de l\'espace',
    'level': 'error',
  }]

  add_logMessage(log) {
    console.log(log.message, log.level)
    let color = ''
    switch (log.level) {
      case 'debug':
        color = 'orange'
        break
      case 'success':
        color = 'green'
        break
      case 'error':
        color = 'red'
        break
      case 'infos':
        color = 'blue'
    }
    const newMessage = { message: log.message, level: log.level, color: color }
    this.logMessages.push(newMessage)
    console.log(this.logMessages)
  }

  constructor() { }

  ngOnInit() {
  }

}
