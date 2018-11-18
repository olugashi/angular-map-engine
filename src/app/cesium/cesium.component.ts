
import { Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CesiumPolyline } from './classes/cesium.component.polyline';
import { CesiumPolygons } from './classes/cesium.component.polygons';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements OnInit , OnDestroy {

  @ViewChild('container') public container: ElementRef;

  public viewer: any;
  private polyline: CesiumPolyline;
  private polygon: CesiumPolygons;

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    this.polyline = new CesiumPolyline(this);
    this.polygon = new CesiumPolygons(this);
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap(): void {
    this.viewer = new Cesium.Viewer(this.container.nativeElement);
  }
  ngOnDestroy(): void {
  }

  CreatePolygon(event: Event) {
    console.log('click event', event);
    this.polygon.CreateEntity();
  }

   CreatePolyline(event: Event) {
    console.log('click event', event);
    this.polyline.CreateEntity();
  }

  CreateMarker(event: Event) {
    console.log('click event', event);
    this.polygon.CreateEntity();
  }
}
