import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CesiumComponent } from './cesium.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';


describe('CesiumComponent', () => {
  let component: CesiumComponent;
  let fixture: ComponentFixture<CesiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [ CesiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CesiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
