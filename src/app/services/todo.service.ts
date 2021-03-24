import {Task} from '../model/task.model';

export class TodoService {
  tasks: Task[] = [new Task('123', '123', 'high'), new Task('123', '123', 'high'), new Task('123', '123', 'high')];

  addTask(task: Task): void{
    this.tasks.push(task);
    console.log(this.tasks.length);
    console.log('proba');
  }

}

