
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'get-tasks',
  templateUrl: './get-tasks.html',
  styleUrls: ['./get-tasks.css']
})
export class GetTasks implements OnInit {

  @Input() tasks;
  @Output() deleteEvent = new EventEmitter()
  @Output() updateEvent = new EventEmitter()
  updatedTask = {
    id: undefined,
    title: '',
    body: '',
    index: undefined
  }

  fireDeleteEvent(id) {
    this.deleteEvent.emit(id);
  }

  fireUpdateEvent() {

    this.updateEvent.emit(Object.assign({}, this.updatedTask))

  }

  editTask(id) {
    let index;
    this.tasks.forEach((task, i) => {
      if (task.id === id) {
        index = i;
      }
      task.edit = false;
    })
    this.updatedTask.id = id
    this.updatedTask.title = this.tasks[index].title
    this.updatedTask.body = this.tasks[index].body
    this.updatedTask.index = index

    this.tasks[index].edit = true;
  }

  ngOnInit() {
  }

}

