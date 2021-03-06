import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../model/task.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
