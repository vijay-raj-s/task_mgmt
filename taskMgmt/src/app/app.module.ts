import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskGroupComponent } from './task-group/task-group.component';


//Material Design Components
import { MatToolbar } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    TaskBoardComponent,
    MatToolbar,
    TaskGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
