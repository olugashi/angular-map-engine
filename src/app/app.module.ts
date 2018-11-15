import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CesiumDirective } from './cesium.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material';
import { DialogCreatePolylineComponentComponent } from './dialog-create-polyline-component/dialog-create-polyline-component.component';
import { MapToolBarComponentComponent } from './map-tool-bar-component/map-tool-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CesiumDirective,
    DialogCreatePolylineComponentComponent,
    MapToolBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
