import { Component, OnInit } from '@angular/core';
import { TASK_GROUPS } from '../constants/task-group-mock';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.sass']
})
export class TaskBoardComponent implements OnInit {
  taskGroups = TASK_GROUPS;
  constructor() {
    console.log(this.taskGroups);
   }

  ngOnInit() {

  }

}
