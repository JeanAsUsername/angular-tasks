import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// tasks component
import { TasksComponent } from './tasks/tasks.component';
import { GetTasks } from './tasks/get-tasks/get-tasks';
import { CreateTask } from './tasks/create-task/create-task';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // tasks
    TasksComponent,
    GetTasks,
    CreateTask
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
