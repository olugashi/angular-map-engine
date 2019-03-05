import { CesiumComponent } from '../cesium.component';
import { BaseEntity } from './cesium.component.baseEntity';

export class CesiumPolyline extends BaseEntity{
  public _polylineEntity;
  public _positions: Array<any> = [];


  constructor(private cesium: CesiumComponent) {
    super();
  }

  public CreateEntity() {
    this._positions = [];
    var entityId = this.CreateEntityId();
    this._polylineEntity = this.cesium.viewer.entities.add({
      id: entityId,
      name: 'Polyline' + entityId,
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
  private setCallbackProperty(value, property?) {
    return new Cesium.CallbackProperty(function () {
      // handle a function
      /*if (isFunction(value)) {
        return value(property);
      }

      // handle reference binding
      if (!isUndefined(property)) {
        return value[property];
      }*/

      return value;
    }, false);
  }
}
