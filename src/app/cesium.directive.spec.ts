import { CesiumDirective } from './cesium.directive';

describe('CesiumDirective', () => {
  it('should create an instance', () => {
    const directive = new CesiumDirective(this.el.ElementRef);
    expect(directive).toBeTruthy();
  });
});
