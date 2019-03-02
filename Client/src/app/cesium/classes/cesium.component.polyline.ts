import { CesiumComponent } from '../cesium.component';

export class CesiumPolyline {
  public _polylineEntity;
  public _positions: Array<any> = [];
  public polyline_id = 0;

  constructor(private cesium: CesiumComponent) {

  }

  public CreateEntity() {
    this._positions = [];

    this._polylineEntity = this.cesium.viewer.entities.add({
      id: this.polyline_id += 1,
      name: 'Polyline' + this.polyline_id,
      polyline: {
        show: true,
        positions: this._positions,
        material: Cesium.Color.LIGHTSKYBLUE
      }
    });

    this.initDrawer();
  }

  initDrawer() {
    this.cesium.viewer.cesiumHandler = new Cesium.ScreenSpaceEventHandler(this.cesium.viewer.scene.canvas);
    this.cesium.viewer.cesiumHandler.setInputAction(this.leftClickInputAction.bind(this), Cesium.ScreenSpaceEventType.LEFT_CLICK);
    this.cesium.viewer.cesiumHandler.setInputAction(this.doubleClickInputAction.bind(this), Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    this.cesium.viewer.cesiumHandler.setInputAction(this.mouseMoveInputAction.bind(this), Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }

  private mouseMoveInputAction(event: { endPosition: { x: number, y: number } }): void {
    this.updatePolygon(event);
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

    this._polylineEntity.polyline.show = true;
    this._positions.push(cartesian);
  }

  private endDrawPolygon() {
    this.cesium.viewer.cesiumHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
    this.cesium.viewer.cesiumHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    this.cesium.viewer.cesiumHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    this._polylineEntity.polyline.show = true;
  }
  private updatePolygon(iClickEvent) {
    const cartesian = this.cesium.viewer.camera.pickEllipsoid(iClickEvent.endPosition, this.cesium.viewer.scene.globe.ellipsoid);
    if (!cartesian) {
      return;
    }

    if (this._positions.length === 1) {
      this._positions.push(cartesian);
    } else if (this._positions.length > 1) {
      this._positions.splice(this._positions.length - 1, 1, cartesian);
    }

    console.log(this._positions.length);
  }

  destroy() {
    this.cesium.viewer.cesiumHandler.destroy();
  }
}
