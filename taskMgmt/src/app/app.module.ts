import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TaskComponent } from './task/task.component';

//Material Design Components
import { MatToolbar } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    TaskBoardComponent,
    MatToolbar,
    TaskGroupComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
