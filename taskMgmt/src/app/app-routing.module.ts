import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { TaskBoardComponent } from './task-board/task-board.component';
 
const routes: Routes = [
  { path: 'taskboard', component: TaskBoardComponent },
  { path: '',
    redirectTo: '/taskboard',
    pathMatch: 'full'
  },
  { path: '**', component: PathNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
