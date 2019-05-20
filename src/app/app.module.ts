import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatRadioModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { GraphDisplayComponent } from './graph-display/graph-display.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DataDynamicComponent } from './data-dynamic/data-dynamic.component';
import { LgpubComponent } from './lgpub/lgpub.component';
import { AgGridModule } from 'ag-grid-angular';
import { HomeComponent } from './home/home.component';
import { CetsPortalComponent } from './cets-portal/cets-portal.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GraphDisplayComponent,
    DataDynamicComponent,
    LgpubComponent,
    HomeComponent,
    CetsPortalComponent,
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTabsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatRadioModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    ChartsModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
