import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnilModule } from './onil/pages/onil.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
