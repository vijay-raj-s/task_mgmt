import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() taskInfo: any;
  
  constructor() { 
    console.log(this.taskInfo);
  }

  ngOnInit() {
  }

}
