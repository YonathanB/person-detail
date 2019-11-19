import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonDetailsComponent, AddActions } from './person-details/person-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule ],
  declarations: [ AppComponent , PersonDetailsComponent, AddActions],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
