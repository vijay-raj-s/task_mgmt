import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() taskInfo: Task;
  
  constructor(private dialog: MatDialog) { 
    console.log(this.taskInfo);
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.taskInfo;
    
     
    const dialogRef = this.dialog.open(TaskDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data) 
    );    
  } 
  ngOnInit() {
  }

}
