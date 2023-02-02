import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { CustomTemplateListComponent, HttpListComponent, StaticListComponent } from './lists';
declare const chance;

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxTypeaheadModule ],
  declarations: [ AppComponent, HelloComponent, CustomTemplateListComponent, HttpListComponent, StaticListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
