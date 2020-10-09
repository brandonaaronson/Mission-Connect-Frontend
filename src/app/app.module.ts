import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionaryComponent } from './missionary/missionary.component';
import { MissionaryConfigComponent } from './missionary-config/missionary-config.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionaryComponent,
    MissionaryConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
