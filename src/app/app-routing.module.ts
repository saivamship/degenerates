import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphDisplayComponent } from './graph-display/graph-display.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'graph-display', component: GraphDisplayComponent },
  { path: '', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
