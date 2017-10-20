import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridStackComponent, GridStackItemDirective } from 'ng2-gridstack/ng2-gridstack.js';


@NgModule({
  declarations: [
    AppComponent,
    GridStackComponent,
    GridStackItemDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
