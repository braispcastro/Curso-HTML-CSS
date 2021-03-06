import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
