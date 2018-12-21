import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule , } from '@angular/material';
import { MatButtonModule , } from '@angular/material/button';
import { CesiumComponent } from './cesium/cesium.component';
import { MapToolBarComponentComponent } from './map-tool-bar-component/map-tool-bar-component.component';
import { MapToolBarService } from './services/map-tool-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    CesiumComponent,
    MapToolBarComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [MapToolBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
