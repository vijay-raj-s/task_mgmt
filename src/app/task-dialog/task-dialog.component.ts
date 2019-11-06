import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Inject } from '@angular/core';
import { Task } from '../task';
import { TaskGroup } from '../task-group';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.sass']
})
export class TaskDialogComponent implements OnInit {
   
  task: Task;
  taskGroups : TaskGroup[];
  taskGroupSelected: number;

  constructor(private dialogRef: MatDialogRef<TaskDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.task = data.task;
    this.taskGroups = data.taskGroups;
    console.log(this.task);
  }

  ngOnInit() {
  }
  save() {
      //Removing task from current group to using parent group ID 
      //Updating parent group ID and status if selected group is Done and moving the task to new group
      //Copying Parent ID since task object's parent ID might get updated before it is used to remove from the current group 
      if(this.taskGroupSelected){
        let parentID = this.task.parentGroupID;
        for ( let i=0; i <  this.taskGroups.length; i++){
          if(this.taskGroups[i].id == parentID){
            this.taskGroups[i].tasks.splice(this.taskGroups[i].tasks.findIndex(x => {
              return x.id === this.task.id;
            }), 1);
          }
          if(this.taskGroups[i].id == this.taskGroupSelected){
            this.taskGroups[i].tasks? null: this.taskGroups[i].tasks = []; 
            this.taskGroupSelected == 3 ? this.task.taskDone = true : this.task.taskDone = false; 
            this.task.parentGroupID = this.taskGroupSelected;  
            this.taskGroups[i].tasks.push(this.task);
          }
          
        }
      } 

      this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}
