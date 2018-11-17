import { Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CesiumPolyline } from './classes/cesium.component.polyline';
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

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    this.polyline = new CesiumPolyline(this);
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap(): void {
    this.viewer = new Cesium.Viewer(this.container.nativeElement);
  }
  ngOnDestroy(): void {
  }

  onClick(event: Event) {
    console.log('click event', event);
    this.polyline.CreatePolyline();
  }
}
