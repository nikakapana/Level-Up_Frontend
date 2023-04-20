import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FirstTabComponent} from "./main-layout/tabs/first-tab/first-tab.component";
import {SecondTabComponent} from "./main-layout/tabs/second-tab/second-tab.component";
import {ThirdTabComponent} from "./main-layout/tabs/third-tab/third-tab.component";
import {RouterOutlet} from "@angular/router";
import {MainLayoutModule} from "./main-layout/main-layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    MainLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
