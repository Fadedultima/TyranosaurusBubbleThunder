import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CerebraListComponent } from './cerebras/cerebra-list.component';

@NgModule({
  imports: [ FormsModule, BrowserModule ],
  declarations: [ AppComponent, CerebraListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
