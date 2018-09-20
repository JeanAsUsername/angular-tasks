import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [];

  deleteTask(id, e) {
    let index;
    this.tasks.forEach((task, i) => {
      if (task.id === id) {
        index = i
      }
    })
    this.tasks.splice(index, 1)
  }

  createNewTask(task) {

    let id = this.tasks[this.tasks.length - 1].id + 1;
    task.id = id

    this.tasks.push(task)
    
  }

  updateTask(updatedTask) {
    let index = updatedTask.index;

    this.tasks[index].title = updatedTask.title;
    this.tasks[index].body = updatedTask.body;
    this.tasks[index].edit = false;
  }

  ngOnInit() {

    this.tasks.push(...[{
      id: 1,
      title: 'Practicar programación',
      body: 'Especificamente angular',
      priority: 'Alta',
      color: '#FF3333',
      edit: false
    }, {
      id: 2,
      title: 'Limpiar el cuarto',
      body: 'Recordar pasar tambien un coleto',
      priority: 'Media',
      color: '#FF8D33',
      edit: false
    }, {
      id: 3,
      title: 'Seguir programando',
      body: 'Especificamente en React',
      priority: 'Alta',
      color: '#FF3333',
      edit: false}])

      
  }

}
