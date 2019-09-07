import { NgModule } from '@angular/core';
import { MyControlLibraryComponent } from './my-control-library.component';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [MyControlLibraryComponent],
  imports: [
    MatButtonModule
  ],
  exports: [MyControlLibraryComponent]
})
export class MyControlLibraryModule { }
