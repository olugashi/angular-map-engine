import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapToolBarComponentComponent } from './map-tool-bar-component.component';

describe('MapToolBarComponentComponent', () => {
  let component: MapToolBarComponentComponent;
  let fixture: ComponentFixture<MapToolBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapToolBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapToolBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
