import { Component, OnInit, Input } from '@angular/core';
import { TaskGroup } from '../task-group';

@Component({
  selector: 'task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.sass']
})
export class TaskGroupComponent implements OnInit {

  @Input() details: TaskGroup;
  constructor() { 
    console.log('Inside Group component');
    console.log(this.details);
  }

  ngOnInit() {
    
  }

}
