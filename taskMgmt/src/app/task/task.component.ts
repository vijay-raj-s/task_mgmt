import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskGroup } from '../task-group';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() taskInfo: Task;
  @Input() taskGroups: TaskGroup[];
  
  constructor(private dialog: MatDialog) {  
  }
  
  //Iterating the task group and removing the task from the current group using the parent group ID
  //And pushing a copy of the current task into group 3(Done) whose ID never changes all in one iteration.
  //Copying Parent ID since task object's parent ID might get updated before it is used to remove from the current group       
  markTaskDone(task){

    let parentID = task.parentGroupID;
    for ( let i=0; i <  this.taskGroups.length; i++){
      if(this.taskGroups[i].id == parentID){
        this.taskGroups[i].tasks.splice(this.taskGroups[i].tasks.findIndex(x => {
          return x.id === task.id;
        }), 1);
      }
      if(this.taskGroups[i].id == 3){
        this.taskGroups[i].tasks? null: this.taskGroups[i].tasks = []; 
        task.taskDone = true;
        task.parentGroupID = 3;
        this.taskGroups[i].tasks.push(task);
      }
    }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      task:  this.taskInfo,
      taskGroups: this.taskGroups
    }
     
    const dialogRef = this.dialog.open(TaskDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data) 
    );    
  } 
  ngOnInit() {
  }

}
