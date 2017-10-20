import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { GridStackComponent } from 'ng2-gridstack/src/gridstack.component.js';
// import { GridStackItemDirective } from 'ng2-gridstack/src/gridstack.item.directive.js';

import { GridStackComponent } from './ng2-gridstack.component';
import { GridStackItemDirective } from './ng2-gridstack.directive';

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
