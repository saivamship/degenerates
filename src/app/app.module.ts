import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatRadioButton, MatRadioModule } from '@angular/material';
import { Chart } from 'chart.js';
import { GraphDisplayComponent } from './graph-display/graph-display.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DataDynamicComponent } from './data-dynamic/data-dynamic.component';
import { LgpubComponent } from './lgpub/lgpub.component';
import { AgGridModule } from 'ag-grid-angular';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphDisplayComponent,
    DataDynamicComponent,
    LgpubComponent,
    HomeComponent
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTabsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
