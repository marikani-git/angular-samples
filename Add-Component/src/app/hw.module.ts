import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HwComponent} from './hw.component';
import {MainComponent} from './comp-main/comp-main.component';

@NgModule({
  declarations: [HwComponent, MainComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HwComponent]
})

export class HwModule {
}

