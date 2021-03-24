import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Task} from '../../model/task.model';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
  providers: [TodoService]
})
export class FormTaskComponent {
  constructor(private todoService: TodoService) { }


  priorities: string[] = ['Low', 'Medium', 'High'];

  title = '';
  description = '';
  priority = '';
  statusMessage = '';

  onAddTask(): void {
    if (this.title === '' || this.description === '' || this.priority === ''){
      this.statusMessage = 'Fields cannot be empty!';
    } else{
      this.statusMessage = 'Successfully saved!' + this.priority;
      this.todoService.addTask(new Task(this.title, this.description, this.priority));
    }
  }





}
