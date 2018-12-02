
import { Component, ElementRef, HostBinding , OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CesiumPolyline } from './classes/cesium.component.polyline';
import { CesiumPolygons } from './classes/cesium.component.polygons';
import { MapToolBarService } from '../services/map-tool-bar.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css'],
})
export class CesiumComponent implements OnInit , OnDestroy {

  @ViewChild('container') public container: ElementRef;

  public viewer: any;
  private polyline: CesiumPolyline;
  private polygon: CesiumPolygons;

  @HostBinding('class.data')
  data = '';

  constructor(public activatedRoute: ActivatedRoute, public router: Router, private mapToolBarService: MapToolBarService) {
    this.polyline = new CesiumPolyline(this);
    this.polygon = new CesiumPolygons(this);
  }

  ngOnInit() {
    this.initializeMap();
    this.initIoConnection();
    this.mapToolBarService.change.subscribe(this.CreatePolyline);
    
  }

  private initIoConnection(): void {
  }

  initializeMap(): void {
    this.viewer = new Cesium.Viewer(this.container.nativeElement);
  }
  ngOnDestroy(): void {
  }

  CreateEntity(s: string) {
    console.log('CreateEntity');

    switch  (s) {
    case 'Polyline':
      this.CreatePolyline();
      break;
    case 'Polygon':
      this.CreatePolygon();
      break;
    case 'Marker':
    this.CreateMarker();
      break;
    default:
    break;
    }
  }

  CreatePolygon() {
    console.log('CreatePolygon');
    this.polygon.CreateEntity();
  }

   CreatePolyline() {
    console.log('CreatePolyline');
    this.polyline.CreateEntity();
  }

  CreateMarker() {
    console.log('CreateMarker');
    this.polygon.CreateEntity();
  }
}
