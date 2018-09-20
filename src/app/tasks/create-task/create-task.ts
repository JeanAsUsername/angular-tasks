
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.html',
  styleUrls: ['./create-task.css']
})
export class CreateTask implements OnInit {

  @Output() createEvent = new EventEmitter();

  task = {
    title: '',
    body: '',
    priority: '',
    color: '',
    edit: false
  }

  fireCreateEvent(e) {
    e.preventDefault()
    switch(this.task.priority) {
      case 'Alta': this.task.color = '#FF3333'
      break;
      case 'Media': this.task.color = '#FF8D33'
      break;
      case 'Baja': this.task.color = '#18A2F1'
    }

    let newTask = Object.assign({}, this.task)
    for (let prop in this.task) {
      this.task[prop] = ''
    }
    this.createEvent.emit(newTask)
  }


  ngOnInit() {

  }

}