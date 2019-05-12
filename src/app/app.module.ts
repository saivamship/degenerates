import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatRadioButton, MatRadioModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
