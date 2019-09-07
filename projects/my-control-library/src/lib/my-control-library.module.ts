import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyControlLibraryComponent } from './my-control-library.component';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [MyControlLibraryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [MyControlLibraryComponent]
})
export class MyControlLibraryModule { }
