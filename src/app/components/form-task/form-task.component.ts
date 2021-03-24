import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  priorities: string[] = ['Low', 'Medium', 'High'];

  title = '';
  description = '';
  priority = '';
  statusMessage = '';

  onAddTask(): void {
    if (this.title === '' || this.description === ''){
      this.statusMessage = 'Fields cannot be empty!';
    } else{
      this.statusMessage = 'Successfully saved!';

    }
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
