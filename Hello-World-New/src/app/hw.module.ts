import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HwComponent} from './hw.component';

@NgModule({
  declarations: [HwComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HwComponent]
})

export class HwModule {
}

