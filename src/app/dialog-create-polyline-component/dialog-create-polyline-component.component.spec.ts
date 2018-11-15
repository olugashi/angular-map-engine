import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatePolylineComponentComponent } from './dialog-create-polyline-component.component';

describe('DialogCreatePolylineComponentComponent', () => {
  let component: DialogCreatePolylineComponentComponent;
  let fixture: ComponentFixture<DialogCreatePolylineComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreatePolylineComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreatePolylineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
