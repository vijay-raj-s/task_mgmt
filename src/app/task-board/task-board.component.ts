import { Component, OnInit } from '@angular/core';
import { TASK_GROUPS } from '../constants/task-group-mock';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.sass']
})
export class TaskBoardComponent implements OnInit {
  taskGroups = TASK_GROUPS;
  addTaskGroupVisible: boolean;
  taskGroupName: string;
  showCancel: boolean = false;

  constructor() {
    console.log(this.taskGroups); 
    this.addTaskGroupVisible = false;
   }
 

   createTaskGroup(){
    let newTaskGroup ={
      'id' : (this.taskGroups.length + 1),
      'name' : this.taskGroupName,
      'priority': (this.taskGroups.length + 1)
    }
    this.addTaskGroupVisible = false;
    this.taskGroupName = '';
    this.taskGroups.push(newTaskGroup); 
   }

   drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskGroups, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {

  }

}
