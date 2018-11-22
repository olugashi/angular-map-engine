import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule , } from '@angular/material';
import { MatButtonModule , } from '@angular/material/button';
import { CesiumComponent } from './cesium/cesium.component';
import { DialogCreatePolylineComponentComponent } from './dialog-create-polyline-component/dialog-create-polyline-component.component';
import { MapToolBarComponentComponent } from './map-tool-bar-component/map-tool-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CesiumComponent
    DialogCreatePolylineComponentComponent,
    MapToolBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
