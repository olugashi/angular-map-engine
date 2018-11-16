import { Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements OnInit , OnDestroy {

  @ViewChild('container') public container: ElementRef;

  public viewer: any;

  constructor() {}

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap(): void {
    this.viewer = new Cesium.Viewer(this.container.nativeElement);
  }
  ngOnDestroy(): void {
  }

}
