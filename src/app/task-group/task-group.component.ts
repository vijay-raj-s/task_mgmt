import { Component, OnInit, Input } from '@angular/core';
import { TaskGroup } from '../task-group';
 
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.sass']
})
export class TaskGroupComponent implements OnInit {

  @Input() details: TaskGroup;
  @Input() taskGroups: TaskGroup[];

  taskName: string;
  addTaskVisible : false;

  constructor() { 
    console.log('Inside Group component');
    console.log(this.details);
  }

  createNewTask(event){
    console.log(event);
    if((event.key == 'Enter' || event.type == 'blur') && this.taskName && this.taskName.length > 1){
      let task = {
        'id': (this.details.tasks ? this.details.tasks.length + 1 : 1),
        'name' : this.taskName,
        'taskDone': this.details.id == 3? true : false,
        'parentGroupID': this.details.id
      }
      
      this.details.tasks?  null: this.details.tasks = [];
      this.details.tasks.splice(0, 0,task);
      this.addTaskVisible = false;
      this.taskName = ''; 
    }
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.details.tasks, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    
  }

}
