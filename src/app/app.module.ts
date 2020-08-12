import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Exercise1Module} from './exercise1/exercise1.module';
import { Exercise2Module } from './exercise2/exercise2.module';
import {DemoModule} from './demo/demo.module';
import { DirectivesModule } from './directives/directives.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Exercise1Module,
    Exercise2Module,
    DemoModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
