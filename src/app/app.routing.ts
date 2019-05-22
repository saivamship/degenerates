import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphDisplayComponent } from './graph-display/graph-display.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  { path: 'graphs', component: GraphDisplayComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
