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
import { MatIconModule, MatButtonModule,  MatToolbar, MatDialogModule, MatSelectModule , MatDatepickerModule,MatNativeDateModule , MatInputModule, MatFormFieldModule} from '@angular/material';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    TaskBoardComponent,
    MatToolbar,  
    TaskGroupComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [TaskDialogComponent]
})
export class AppModule { }
