import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphDisplayComponent } from './graph-display/graph-display.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full' },
  { path: 'graphs', component: GraphDisplayComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
