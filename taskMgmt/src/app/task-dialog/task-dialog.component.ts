import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Inject } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.sass']
})
export class TaskDialogComponent implements OnInit {
   
  task: Task;

  constructor(private dialogRef: MatDialogRef<TaskDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.task = data;
    console.log(this.task);
  }

  ngOnInit() {
  }
  save() {
      this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}
