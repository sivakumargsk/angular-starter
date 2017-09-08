import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MyHighlightDirective } from './my-highlight.directive';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, MyHighlightDirective],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1JKR48r3BmuvNxnUtvv9w_at3rdjKikw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
