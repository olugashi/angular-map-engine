import { CesiumComponent } from '../cesium.component';

export class CesiumPolygons {

  public _polygonEntity;
  public _positions: Array<any> = [];
  public polygon_id = 0;

  constructor(private cesium: CesiumComponent) {

  }
  public CreateEntity() {
    this._positions = [];

    this._polygonEntity = this.cesium.viewer.entities.add({
      id: this.polygon_id += 1,
      name: 'PolygonDrawer' + this.polygon_id,
      polyline: {
        show: true,
        positions: this._positions,
        material: Cesium.Color.LIGHTSKYBLUE.withAlpha(0.5)
      },
      polygon: {
        hierarchy: this._positions,
        material: Cesium.Color.LIGHTSKYBLUE.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.LIGHTSKYBLUE
      }
    });

    this.initDrawer();
  }
  initDrawer() {
    this.cesium.viewer.cesiumHandler = new Cesium.ScreenSpaceEventHandler(this.cesium.viewer.scene.canvas);
    this.cesium.viewer.cesiumHandler.setInputAction(this.leftClickInputAction.bind(this), Cesium.ScreenSpaceEventType.LEFT_CLICK);
    this.cesium.viewer.cesiumHandler.setInputAction(this.doubleClickInputAction.bind(this), Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
  }

  private leftClickInputAction(event: { position: { x: number, y: number } }): void {
    this.startDrawPolygon(event);
  }

  private doubleClickInputAction(event: { position: { x: number, y: number } }): void {
    this.endDrawPolygon();
  }


  private startDrawPolygon(iClickEvent) {
    const cartesian = this.cesium.viewer.camera.pickEllipsoid(iClickEvent.position, this.cesium.viewer.scene.globe.ellipsoid);
    if (!cartesian) {
      return;
    }

    this._polygonEntity.polyline.show = true;
    this._polygonEntity.polygon.show = false;

    this._positions.push(cartesian);
  }

  private endDrawPolygon() {
    this.cesium.viewer.cesiumHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
    this.cesium.viewer.cesiumHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    this.cesium.viewer.cesiumHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    this._polygonEntity.polyline.show = false;
    this._polygonEntity.polygon.show = true;
  }



}
