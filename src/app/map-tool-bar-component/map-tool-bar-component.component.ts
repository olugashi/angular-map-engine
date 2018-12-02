import { Component, HostListener, OnInit } from '@angular/core';
import { MapToolBarService } from '../services/map-tool-bar.service';


@Component({
  selector: 'app-map-tool-bar-component',
  templateUrl: './map-tool-bar-component.component.html',
  styleUrls: ['./map-tool-bar-component.component.css'],

})
export class MapToolBarComponentComponent implements OnInit {

  constructor(private mapToolBarService: MapToolBarService) { }

  ngOnInit() {
  }

  CreatePolyline() {
    console.log('Click1', event);
    this.mapToolBarService.ChangeEntity('Polyline');
  }
  CreatePolygon() {
    console.log('click event', event);
  }

  CreateMarker() {
    console.log('click event', event);
  }

  SendMessage() {
    console.log('sendMessage');
  }
}
