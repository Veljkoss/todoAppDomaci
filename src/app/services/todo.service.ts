import {Task} from '../model/task.model';

export class TodoService {
  tasks: Task[] = [];

  addTask(task: Task): void{
    this.tasks.push(task);
  }
}

