import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';
import {Task} from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'angular-app-domaci';

  constructor(private todoService: TodoService) {
  }

  tasks: Task[] = this.todoService.tasks;
}
