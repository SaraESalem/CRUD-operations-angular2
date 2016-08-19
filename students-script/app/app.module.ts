import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {DashboardComponent} from "./dashboard.component";
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [ BrowserModule ,FormsModule],
  declarations: [ DashboardComponent ],
  // bootstrap: [ AppComponent ]
  bootstrap: [ DashboardComponent ]
})
export class AppModule { }
